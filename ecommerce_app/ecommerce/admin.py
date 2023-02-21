from django.contrib import admin
from .models import Product, Review, PurchaseProduct, Purchase

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(PurchaseProduct)
admin.site.register(Purchase)
