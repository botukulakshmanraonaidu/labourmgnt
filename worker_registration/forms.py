from django import forms
from .models import Worker_registration

class WorkerRegistrationForm(forms.ModelForm):
    class Meta:
        model = Worker_registration
        fields = "__all__"