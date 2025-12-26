import random
from django.core.mail import send_mail
from django.conf import settings

def generate_otp():
    return str(random.randint(100000, 999999))

def send_email_otp(email, otp):
    send_mail(
        subject="Verify your booking",
        message=f"Your OTP for booking verification is {otp}",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[email],
        fail_silently=False,
    )

def send_confirmation(booking):
    # EMAIL
    send_mail(
        subject="Booking Confirmed ✅",
        message=(
            f"Hello {booking.customer_name},\n\n"
            f"Your booking for {booking.service_type} is confirmed.\n"
            f"Our worker will contact you shortly.\n\n"
            f"Thank you!"
        ),
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[booking.customer_email],
        fail_silently=False,
    )

    # SMS (demo – replace later with SMS API)
    print(
        f"SMS to {booking.customer_phone}: "
        f"Your booking for {booking.service_type} is confirmed."
    )
