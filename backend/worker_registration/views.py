from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from datetime import timedelta
import json
import random

from .models import Worker_registration
from .forms import WorkerRegistrationForm


OTP_EXPIRY_MINUTES = 10


def _json_body(request):
    try:
        return json.loads(request.body.decode("utf-8"))
    except Exception:
        return {}


@csrf_exempt
def worker_register_api(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "POST required"}, status=405)

    data = _json_body(request)
    form = WorkerRegistrationForm(data)

    if not form.is_valid():
        return JsonResponse({"ok": False, "errors": form.errors}, status=400)

    email = form.cleaned_data.get("Email")
    phone = form.cleaned_data.get("phone")
    password = form.cleaned_data.get("password")

    if Worker_registration.objects.filter(Email=email).exists():
        return JsonResponse({"ok": False, "error": "Email already exists"}, status=400)

    if Worker_registration.objects.filter(phone=phone).exists():
        return JsonResponse({"ok": False, "error": "Phone number already exists"}, status=400)

    worker = form.save(commit=False)
    worker.password = make_password(password)
    worker.save()

    return JsonResponse({"ok": True, "message": "Registration successful"})


@csrf_exempt
def worker_login_api(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "POST required"}, status=405)

    data = _json_body(request)
    # Accept both "email" (lowercase) and "Email" (legacy)
    email = data.get("email") or data.get("Email")
    password = data.get("password")

    if not email or not password:
        return JsonResponse({"ok": False, "error": "Email and password required"}, status=400)

    try:
        worker = Worker_registration.objects.get(Email=email)
    except Worker_registration.DoesNotExist:
        return JsonResponse({"ok": False, "error": "Email not found"}, status=404)

    if not check_password(password, worker.password):
        return JsonResponse({"ok": False, "error": "Incorrect password"}, status=400)

    otp = random.randint(1000, 9999)
    request.session["otp"] = str(otp)
    request.session["worker_id"] = worker.id
    request.session["otp_created_at"] = timezone.now().isoformat()

    send_mail(
        "Your Worker Login OTP",
        f"Your OTP is: {otp}. It expires in {OTP_EXPIRY_MINUTES} minutes.",
        settings.EMAIL_HOST_USER,
        [email],
        fail_silently=False,
    )

    return JsonResponse({"ok": True, "message": "OTP sent"})


@csrf_exempt
def worker_verify_otp_api(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "POST required"}, status=405)

    data = _json_body(request)
    otp = (data.get("otp") or "").strip()
    otp1 = data.get("otp1")
    otp2 = data.get("otp2")
    otp3 = data.get("otp3")
    otp4 = data.get("otp4")

    if not otp and all([otp1, otp2, otp3, otp4]):
        otp = f"{otp1}{otp2}{otp3}{otp4}".strip()

    session_otp = request.session.get("otp")
    otp_created_at = request.session.get("otp_created_at")

    if not session_otp:
        return JsonResponse({"ok": False, "error": "OTP expired or not found"}, status=400)

    # Check expiry
    if otp_created_at:
        created = timezone.datetime.fromisoformat(otp_created_at)
        if timezone.is_naive(created):
            created = timezone.make_aware(created)
        if timezone.now() - created > timedelta(minutes=OTP_EXPIRY_MINUTES):
            request.session.pop("otp", None)
            request.session.pop("otp_created_at", None)
            return JsonResponse(
                {"ok": False, "error": "OTP has expired. Please log in again."},
                status=400,
            )

    if otp != str(session_otp):
        return JsonResponse({"ok": False, "error": "Invalid OTP"}, status=400)

    request.session["is_worker_logged_in"] = True
    request.session.pop("otp", None)
    request.session.pop("otp_created_at", None)

    return JsonResponse({"ok": True, "message": "Login successful"})