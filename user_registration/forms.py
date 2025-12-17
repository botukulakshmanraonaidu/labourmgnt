from django import forms
from .models import UserRegistration

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = UserRegistration
        fields = "__all__"

        # widgets = {
        #     "full_name": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter your full name"}),
        #     "phone": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter phone number"}),
        #     "address": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter your address"}),
        #     "city": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter your city"}),
        #     "state": forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter your state"}),
        #     "pincode": forms.NumberInput(attrs={"class": "form-control", "placeholder": "Enter pincode"}),
        #     "user_type": forms.Select(attrs={"class": "form-control"}),
        # }
