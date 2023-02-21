from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    birth_date = models.CharField(blank=True, null=True, max_length=50)
    def __str__(self):
        return self.username
    
    
# class PaymentInfo: