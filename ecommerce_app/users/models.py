from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    location = models.CharField(max_length=255, null=True, blank=True)
    def __str__(self):
        return self.username

class PaymentMethod(models.Model):
    card_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    is_active = models.BooleanField(default=True)
    is_credit_card = models.BooleanField(default=False)
    cardholder_name = models.TextField(default='')
    card_number = models.TextField(default='')
    expiration_mon = models.CharField(max_length=200, null=True, default='')
    expiration_year = models.CharField(max_length=200, null=True, default='')
    cvv = models.CharField(max_length=170, null=True, default='')

    def __str__(self):
        return self.description