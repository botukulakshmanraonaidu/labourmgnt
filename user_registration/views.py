from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from .forms import RegistrationForm
from .models import UserRegistration

def user_register(request):

    if request.method == "POST":
        form = RegistrationForm(request.POST)

        if form.is_valid():

            email = form.cleaned_data["Email"]
            phone = form.cleaned_data["phone"]
            password = form.cleaned_data["password"]

            # -----------------------------
            # CHECK IF EMAIL EXISTS
            # -----------------------------
            if UserRegistration.objects.filter(Email=email).exists():
                messages.error(request, "Email already exists! Please use a different email.")
            # -----------------------------
            # CHECK IF PHONE EXISTS
            # -----------------------------
            elif UserRegistration.objects.filter(phone=phone).exists():
                messages.error(request, "Phone number already exists!")
            else:
                # -----------------------------
                # SAVE NEW WORKER (HASH PASSWORD)
                # -----------------------------
                User_obj = form.save(commit=False)
                User_obj.password = make_password(password)   # HASHING
                User_obj.save()

                messages.success(request, "Registration successful!")
                return redirect("homepage")

    else:
        form = RegistrationForm()

    # Form stored in context variable
    context = {
        "form": form
    }

    return render(request, "Users/register.html", context)



# login view for user

import random
from django.core.mail import send_mail
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.conf import settings
from .models import UserRegistration


def user_login(request):

    if request.method == "POST":
        email = request.POST.get("Email")
        password = request.POST.get("password")

        # -------------------------
        # CHECK EMAIL EXISTS
        # -------------------------
        try:
            user = UserRegistration.objects.get(Email=email)
        except UserRegistration.DoesNotExist:
            messages.error(request, "Email not found. Please register first.")
            return render(request, "Users/login.html")

        # -------------------------
        # CHECK PASSWORD (HASH)
        # -------------------------
        if not check_password(password, user.password):
            messages.error(request, "Incorrect password!")
            return render(request, "Users/login.html")

        # -------------------------
        # PASSWORD CORRECT → GENERATE OTP
        # -------------------------
        otp = random.randint(1000, 9999)

        # Store OTP in session
        request.session["otp"] = otp
        request.session["user_id"] = user.id

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

        return redirect("verify_otp")

    return render(request, "Users/login.html")

# otp verification View

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import UserRegistration


# def verify_otp(request):

#     if request.method == "POST":
#         entered_otp = request.POST.get("otp")
#         session_otp = str(request.session.get("otp"))
#         user_id = request.session.get("user_id")

#         # -------------------------
#         # CHECK OTP MATCH
#         # -------------------------
#         if entered_otp == session_otp:

#             # OTP correct → login worker
#             request.session["is_user_logged_in"] = True
#             request.session["user_id"] = user_id

#             # Delete OTP from session (security)
#             del request.session["otp"]

#             messages.success(request, "Login successful!")
#             return redirect("homepage")

#         else:
#             messages.error(request, "Invalid OTP. Please try again.")

#     return render(request, "Users/verify_otp.html")

def verify_otp(request):

    if request.method == "POST":

        otp1 = request.POST.get("otp1")
        otp2 = request.POST.get("otp2")
        otp3 = request.POST.get("otp3")
        otp4 = request.POST.get("otp4")

        entered_otp = otp1 + otp2 + otp3 + otp4   # combine digits
        session_otp = str(request.session.get("otp"))
        user_id = request.session.get("user_id")

        if entered_otp == session_otp:
            request.session["is_user_logged_in"] = True
            request.session["user_id"] = user_id
            del request.session["otp"]
            messages.success(request, "Login successful!")
            return redirect("homepage")
        else:
            messages.error(request, "Invalid OTP!")

    return render(request, "Users/verify_otp.html")
