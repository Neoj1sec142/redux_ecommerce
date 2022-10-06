from django.db import models
from users.models import User

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='merchs', blank=True)
    title = models.CharField(max_length=256)
    description = models.TextField(default='Needs description', blank=True, null=True)
    img_url = models.URLField(max_length=512, blank=True, null=True)
    price = models.CharField(max_length=50, null=True)
    system = models.CharField(max_length=50, null=True)
    status = models.CharField(max_length=50, null=True, blank=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title
