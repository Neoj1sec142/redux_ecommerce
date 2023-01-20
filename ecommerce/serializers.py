from rest_framework import serializers
from .models import Product, Purchase
from users.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class PurchaseSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Purchase
        fields = '__all__'
        extra_fields = ('products',)
        ordering = ('-date_created')