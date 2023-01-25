from rest_framework import serializers
from .models import Product, Purchase, Review
from users.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["__all__"]
        
class PurchaseSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Purchase
        fields = ['customer', 'products', 'total', 'date_created']
        # extra_kwargs = {'purchased_products':{'required': True}}
        extra_fields = ('products','customer')
        ordering = ('-date_created',)
        
class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    products = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all()
    )
    class Meta:
        model = Review
        fields = '__all__'
        ordering = ('-date_created')