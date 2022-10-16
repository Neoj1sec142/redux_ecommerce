from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=150, default='')
    description = models.TextField(default='')
    price = models.CharField(max_length=20, default='')
    in_stock = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title
    
