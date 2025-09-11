from django.db import models

class Reservation(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    service_type = models.CharField(max_length=50, choices=[('haircut', 'Haircut and Styling'), ('manicure', 'Manicure and Pedicure'), ('facial', 'Facial Treatment')])
    date_time = models.DateTimeField()
    branch = models.ForeignKey('branches.Branch', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} - {self.service_type}"

class Branch(models.Model):
    branch_name = models.CharField(max_length=100)
    branch_location = models.CharField(max_length=100)
    opening_time = models.TimeField()
    closing_time = models.TimeField()

    def __str__(self):
        return self.branch_name
