from django import forms
from .models import UserRegistration

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = UserRegistration
        # Explicitly list only user-supplied fields.
        # Internal fields (email_verified, created_at) are excluded
        # so they cannot be set via the API.
        fields = [
            "full_name",
            "username",
            "password",
            "phone",
            "Email",
            "address",
            "city",
            "state",
            "pincode",
            "user_type",
        ]
