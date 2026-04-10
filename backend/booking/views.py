from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from datetime import timedelta
import json

from .forms import BookingForm
from .models import Booking
from .services import generate_otp, send_email_otp, send_confirmation


OTP_EXPIRY_MINUTES = 10


def _json_body(request):
    try:
        return json.loads(request.body.decode("utf-8"))
    except Exception:
        return {}


@csrf_exempt
def book_worker_api(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "POST required"}, status=405)

    data = _json_body(request)
    form = BookingForm(data)
    if not form.is_valid():
        return JsonResponse({"ok": False, "errors": form.errors}, status=400)

    booking = form.save(commit=False)
    booking.is_confirmed = False
    booking.save()

    otp = generate_otp()

    request.session["booking_id"] = booking.id
    request.session["email_otp"] = str(otp)
    request.session["otp_created_at"] = timezone.now().isoformat()

    send_email_otp(booking.customer_email, otp)

    return JsonResponse({"ok": True, "message": "OTP sent"})


@csrf_exempt
def verify_otp_api(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "POST required"}, status=405)

    booking_id = request.session.get("booking_id")
    session_otp = request.session.get("email_otp")
    otp_created_at = request.session.get("otp_created_at")

    if not booking_id or not session_otp:
        return JsonResponse({"ok": False, "error": "OTP expired or not found"}, status=400)

    # Check OTP expiry
    if otp_created_at:
        created = timezone.datetime.fromisoformat(otp_created_at)
        if timezone.is_naive(created):
            created = timezone.make_aware(created)
        if timezone.now() - created > timedelta(minutes=OTP_EXPIRY_MINUTES):
            request.session.pop("email_otp", None)
            request.session.pop("booking_id", None)
            request.session.pop("otp_created_at", None)
            return JsonResponse({"ok": False, "error": "OTP expired. Please book again."}, status=400)

    data = _json_body(request)
    # Accept either a combined otp field or four individual digits
    entered_otp = (data.get("otp") or "").strip()
    if not entered_otp:
        parts = [data.get(f"otp{i}") or "" for i in range(1, 5)]
        entered_otp = "".join(parts).strip()

    if entered_otp != str(session_otp):
        return JsonResponse({"ok": False, "error": "Invalid OTP"}, status=400)

    booking = Booking.objects.get(id=booking_id)
    booking.is_confirmed = True
    booking.save()

    request.session.pop("email_otp", None)
    request.session.pop("otp_created_at", None)

    send_confirmation(booking)

    return JsonResponse({"ok": True, "message": "Booking confirmed", "booking": {
        "customer_name": booking.customer_name,
        "service_type": booking.service_type,
        "customer_email": booking.customer_email,
    }})