from django.urls import path
from worker_registration.views import worker_register,worker_login,worker_otp_verify
urlpatterns = [
    path('worker_registration/',worker_register,name='Worker_registration'),
    path('worker_login/',worker_login,name='worker_login'),
    path('otp_verify/',worker_otp_verify,name='otp_verify')

]