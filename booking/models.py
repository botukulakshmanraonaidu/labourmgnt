from django.db import models

class Booking(models.Model):

    SERVICE_CHOICES = (
        ("electrician", "Electrician"),
        ("plumber", "Plumber"),
        ("carpenter", "Carpenter"),
        ("mason", "Mason"),
        ("painter", "Painter"),
        ("driver", "Driver"),
        ("welder", "Welder"),
        ("loading_unloading", "Loading & Unloading"),
        ("cleaning_housekeeping", "Cleaning & Housekeeping"),
        ("ac_technician", "AC Technician"),
        ("security_guard", "Security Guard"),
        ("gardener", "Gardener"),
        ("cook", "Cook"),
        ("cctv_technician", "CCTV Technician"),
        ("solar_panel_technician", "Solar Panel Technician"),
        ("construction_helper", "Construction Helper"),
        ("babysitter", "Babysitter"),
        ("elder_care_assistant", "Elder Care Assistant"),
        ("agricultural_worker", "Agricultural Worker"),
        ("pest_control_worker", "Pest Control Worker"),
    )

    service_type = models.CharField(
        max_length=50,
        choices=SERVICE_CHOICES
    )

    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField(max_length=254)
    customer_phone = models.CharField(max_length=15)
    customer_address = models.TextField()
    problem_description = models.TextField()

    worker = models.ForeignKey(
        "worker_registration.Worker_registration",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="bookings"
    )

    is_confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.service_type}"
