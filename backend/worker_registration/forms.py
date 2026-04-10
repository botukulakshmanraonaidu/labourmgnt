from django import forms
from .models import Worker_registration

class WorkerRegistrationForm(forms.ModelForm):
    class Meta:
        model = Worker_registration
        # Explicitly list only worker-supplied fields.
        # Internal fields (email_verified, profile_created_at) are excluded.
        fields = [
            "full_name",
            "gender",
            "age",
            "username",
            "password",
            "phone",
            "Email",
            "specialization",
            "experience_years",
            "address",
            "city",
            "state",
            "pincode",
        ]