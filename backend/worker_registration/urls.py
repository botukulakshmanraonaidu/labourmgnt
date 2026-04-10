from django.urls import path
from worker_registration import views

urlpatterns = [
    path("register/", views.worker_register_api, name="worker_register_api"),
    path("login/", views.worker_login_api, name="worker_login_api"),
    path("verify-otp/", views.worker_verify_otp_api, name="worker_verify_otp_api"),
]