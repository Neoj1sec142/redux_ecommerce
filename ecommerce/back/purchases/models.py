from django.db import models
from django.contrib.auth.models import User

class Purchase(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.CharField(max_length=20, default='')
    item_qtys = models.TextField(default='')
    usr_addr = models.TextField(default='')
    usr_city = models.CharField(max_length=50, default='')
    usr_email = models.CharField(max_length=50, default='')
    hashed_card = models.TextField(default='')
    hased_cv = models.TextField(default='')
    hashed_exp = models.TextField(default='')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.item_qtys[:20]
    