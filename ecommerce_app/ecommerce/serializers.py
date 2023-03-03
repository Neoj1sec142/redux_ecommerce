from rest_framework import serializers
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile
from .models import Product, Purchase, Review, PurchaseProduct
from users.models import User


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False, allow_null=True, allow_empty_file=True)
    # add image field

    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError('Price must be greater than 0')
        return value

    def create(self, validated_data):
        image = validated_data.pop('image', None)
        product = Product.objects.create(**validated_data)
        if image:
            product.image.save(image.name, image)
        return product
    # override create() to handle image upload

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'category', 'image', 'created_at', 'updated_at', 'is_active']
        read_only_fields = ['created_at', 'updated_at']
        
class BrowseSerializer(serializers.ModelSerializer):
    review_count = serializers.IntegerField()
    avg_stars = serializers.FloatField()
    image = serializers.ImageField(required=False, allow_null=True, allow_empty_file=True)
    
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'category', 'image', 'created_at', 'review_count', 'avg_stars')
        read_only_fields = ['created_at', 'image']
    
    
class PurchaseProductSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    
    class Meta:
        model = PurchaseProduct
        fields = ['product', 'quantity']
           
class PurchaseSerializer(serializers.ModelSerializer):
    products = PurchaseProductSerializer(many=True)
    customer = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    
    class Meta:
        model = Purchase
        fields = ['id', 'customer', 'products', 'total_amount', 'date_created']
        read_only_fields = ['date_created']
        ordering = ('-date_created',)
        
    def create(self, validated_data):
        products_data = validated_data.pop('products')
        purchase = Purchase.objects.create(**validated_data)
        for product_data in products_data:
            product_id = product_data.pop('product')
            product = Product.objects.get(id=product_id)
            PurchaseProduct.objects.create(purchase=purchase, product=product, **product_data)
        return purchase
     
class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all()
    )
    class Meta:
        model = Review
        fields = '__all__'
        ordering = ('-date_created')