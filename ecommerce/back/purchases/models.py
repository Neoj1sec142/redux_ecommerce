from django.db import models
from django.contrib.auth.models import User

class Purchase(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.CharField(max_length=20, default='')
    item_qtys = models.TextField(default='')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.item_qtys[:20]
    