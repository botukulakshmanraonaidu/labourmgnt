from django.urls import path
from . import views

urlpatterns = [
    path("", views.book_worker_api, name="book_worker_api"),
    path("verify-otp/", views.verify_otp_api, name="verify_otp_api"),
]