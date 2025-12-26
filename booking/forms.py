from django import forms
from .models import Booking

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = [
            "service_type",
            "customer_name",
            "customer_email",
            "customer_phone",
            "customer_address",
            "problem_description",
        ]

    def clean_customer_phone(self):
        phone = self.cleaned_data.get("customer_phone")
        if not phone.isdigit() or len(phone) != 10:
            raise forms.ValidationError("Phone number must be 10 digits")
        return phone
