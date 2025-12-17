from django.contrib import messages
from django.contrib.auth.hashers import make_password
from .models import Worker_registration
from .forms import WorkerRegistrationForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

def worker_register(request):

    if request.method == "POST":
        form = WorkerRegistrationForm(request.POST)

        if form.is_valid():

            email = form.cleaned_data["Email"]
            phone = form.cleaned_data["phone"]
            password = form.cleaned_data["password"]

            # -----------------------------
            # CHECK IF EMAIL EXISTS
            # -----------------------------
            if Worker_registration.objects.filter(Email=email).exists():
                messages.error(request, "Email already exists! Please use a different email.")
            # -----------------------------
            # CHECK IF PHONE EXISTS
            # -----------------------------
            elif Worker_registration.objects.filter(phone=phone).exists():
                messages.error(request, "Phone number already exists!")
            else:
                # -----------------------------
                # SAVE NEW WORKER (HASH PASSWORD)
                # -----------------------------
                worker = form.save(commit=False)
                worker.password = make_password(password)   # HASHING
                worker.save()

                messages.success(request, "Registration successful!")
                return redirect("homepage")

    else:
        form = WorkerRegistrationForm()

    # Form stored in context variable
    context = {
        "form": form
    }

    return render(request, "workers/registration.html", context)

# login view for worker Login

import random
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.conf import settings

from .models import Worker_registration


def worker_login(request):

    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        # -------------------------
        # CHECK EMAIL EXISTS
        # -------------------------
        try:
            worker = Worker_registration.objects.get(Email=email)
        except Worker_registration.DoesNotExist:
            messages.error(request, "Email not found. Please register first.")
            return render(request, "workers/worker_login.html")

        # -------------------------
        # CHECK PASSWORD (HASH)
        # -------------------------
        if not check_password(password, worker.password):
            messages.error(request, "Incorrect password!")
            return render(request, "workers/worker_login.html")

        # -------------------------
        # PASSWORD CORRECT → GENERATE OTP
        # -------------------------
        otp = random.randint(1000, 9999)

        # Store OTP in session
        request.session["otp"] = otp
        request.session["worker_id"] = worker.id

        # -------------------------
        # SEND OTP TO EMAIL
        # -------------------------
        send_mail(
            "Your Worker Login OTP",
            f"Your OTP is: {otp}",
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )

        return redirect("otp_verify")

    return render(request, "workers/worker_login.html")

# otp verification for worker login

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Worker_registration


# def worker_otp_verify(request):

#     if request.method == "POST":
#         entered_otp = request.POST.get("otp")
#         session_otp = str(request.session.get("otp"))
#         worker_id = request.session.get("worker_id")

#         # -------------------------
#         # CHECK OTP MATCH
#         # -------------------------
#         if entered_otp == session_otp:

#             # OTP correct → login worker
#             request.session["is_worker_logged_in"] = True
#             request.session["worker_id"] = worker_id

#             # Delete OTP from session (security)
#             del request.session["otp"]

#             messages.success(request, "Login successful!")
#             return redirect("homepage")

#         else:
#             messages.error(request, "Invalid OTP. Please try again.")

#     return render(request, "workers/otp_verify.html")

def worker_otp_verify(request):

    if request.method == "POST":
        otp1 = request.POST.get("otp1")
        otp2 = request.POST.get("otp2")
        otp3 = request.POST.get("otp3")
        otp4 = request.POST.get("otp4")

        entered_otp = otp1 + otp2 + otp3 + otp4   # combine digits
        session_otp = str(request.session.get("otp"))
        worker_id = request.session.get("worker_id")

        if entered_otp == session_otp:
            request.session["is_user_logged_in"] = True
            request.session["worker_id"] = worker_id
            del request.session["otp"]
            messages.success(request, "Login successful!")
            return redirect("homepage")
        else:
            messages.error(request, "Invalid OTP!")

    return render(request, "workers/otp_verify.html")