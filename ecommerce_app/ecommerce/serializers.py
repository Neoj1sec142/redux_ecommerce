from rest_framework import serializers
from .models import Product, Purchase, Review, PurchaseProduct
from users.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image', 'category', 'created_at', 'updated_at', 'is_active']
        read_only_fields = ['created_at', 'updated_at']
    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError('Price must be greater than 0')
        return value   
    
class PurchaseProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseProduct
        fields = ['product', 'quantity']
           
class PurchaseSerializer(serializers.ModelSerializer):
    products = PurchaseProductSerializer(many=True)
    customer = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    class Meta:
        model = Purchase
        fields = ['id', 'user', 'products', 'total_amount', 'date_created']
        read_only_fields = ['date', 'total_amount']
        ordering = ('-date_created',)
    def create(self, validated_data):
        products_data = validated_data.pop('products')
        purchase = Purchase.objects.create(**validated_data)
        for product_data in products_data:
            PurchaseProduct.objects.create(purchase=purchase, **product_data)
        return purchase
     
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