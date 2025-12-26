from django.shortcuts import render, redirect
from .forms import BookingForm
from .models import Booking
from .services import generate_otp, send_email_otp, send_confirmation

def book_worker(request):
    if request.method == "POST":
        form = BookingForm(request.POST)
        if form.is_valid():
            booking = form.save(commit=False)
            booking.is_confirmed = False
            booking.save()

            otp = generate_otp()

            # STORE TEMP DATA IN SESSION
            request.session["booking_id"] = booking.id
            request.session["email_otp"] = otp

            send_email_otp(booking.customer_email, otp)

            return redirect("verify_otp")
    else:
        form = BookingForm()

    return render(request, "book_worker.html", {"form": form})


# OTP VERIFICATION VIEW
def verify_otp(request):
    booking_id = request.session.get("booking_id")
    session_otp = request.session.get("email_otp")

    if not booking_id or not session_otp:
        return redirect("book_worker")

    booking = Booking.objects.get(id=booking_id)

    if request.method == "POST":
        entered_otp = request.POST.get("otp")

        if entered_otp == session_otp:
            booking.is_confirmed = True
            booking.save()

            # CLEAR OTP
            del request.session["email_otp"]

            # SEND CONFIRMATION
            send_confirmation(booking)

            return render(request, "success.html", {"booking": booking})

        return render(
            request,
            "verify_otp.html",
            {"error": "Invalid OTP"}
        )

    return render(request, "verify_otp.html")


