from rest_framework import serializers
from .models import Product
from users.models import User
# from users.serializers import UserSerializer
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class ProductSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    
    class Meta:
        model = Product
        fields = '__all__'
        extra_fields = ('users')
        ordering = ('-date_created') 