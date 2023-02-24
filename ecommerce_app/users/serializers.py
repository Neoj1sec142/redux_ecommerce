from rest_framework import serializers
from .models import User, PaymentMethod


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {'write_only': True}
        lookup_field = 'username'
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class PublicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'location', 'is_active']
        ordering = ('-date_joined',)
        
class PaymentMethodSerializer(serializers.ModelSerializer):
    card_owner = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    class Meta:
        model = PaymentMethod
        fields = ['id', 'card_owner', 'description', 'is_active', 'is_credit_card', 'cardholder_name', 'card_number', 'expiration_mon', 'expiration_year', 'cvv']
        
class ProtectedPaymentMethodSerializer(serializers.ModelSerializer):
    card_owner = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all()
    )
    class Meta:
        model = PaymentMethod
        fields = ['id', 'card_owner', 'description', 'is_active', 'is_credit_card', 'expiration_mon', 'expiration_year']        