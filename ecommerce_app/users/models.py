from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.CharField(max_length=30, unique=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    birth_date = models.CharField(blank=True, null=True, max_length=50)
    def __str__(self):
        return self.username
