from django.urls import path
from user_registration import views

urlpatterns = [
    path("register/", views.user_register_api, name="user_register_api"),
    path("login/", views.user_login_api, name="user_login_api"),
    path("verify-otp/", views.user_verify_otp_api, name="user_verify_otp_api"),
]