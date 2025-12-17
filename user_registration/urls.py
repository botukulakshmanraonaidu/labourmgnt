from django.urls import path
from user_registration.views import user_register,user_login,verify_otp

urlpatterns = [
    path('user_register/',user_register,name='user_register'),
    path('user_login/',user_login,name='user_login'),
    path('verify_otp/',verify_otp,name='verify_otp'),

]