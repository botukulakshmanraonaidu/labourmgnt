from django.db import models

class UserRegistration(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, unique=True)
    Email = models.EmailField(null = False,blank=False,unique=True)
    email_verified = models.BooleanField(default=False)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)

    USER_TYPES = (
        ("worker", "Worker"),
        ("employer", "Employer"),
    )
    user_type = models.CharField(max_length=20, choices=USER_TYPES)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.phone}"
