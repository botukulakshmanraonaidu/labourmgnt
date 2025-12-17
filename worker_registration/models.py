from django.db import models

class WorkSpecialization(models.TextChoices):
    ELECTRICIAN = "Electrician", "Electrician"
    PLUMBER = "Plumber", "Plumber"
    CARPENTER = "Carpenter", "Carpenter"
    MASON = "Mason", "Mason"
    DRIVER = "Driver", "Driver"
    PAINTER = "Painter", "Painter"
    WELDER = "Welder", "Welder"
    OTHERS = "Others", "Others"

class Worker_registration(models.Model):
    
    full_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ])
    age = models.IntegerField()
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    Email = models.EmailField(null=False, blank=False,unique=True)
    email_verified = models.BooleanField(default=False)
    specialization = models.CharField(
        max_length=50,
        choices=WorkSpecialization.choices
    )
    
    experience_years = models.IntegerField(default=0)
    address = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=10)
    profile_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
