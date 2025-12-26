from django.urls import path
from .views import book_worker,verify_otp

urlpatterns = [
    path("api/book-worker/", book_worker,name='book-worker'),
    path("verify-otp/", verify_otp, name="verify_otp"),
]