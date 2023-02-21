from django.contrib import admin
from .models import Purchase, Product, Review

admin.site.register(Product)
admin.site.register(Purchase)
admin.site.register(Review)
