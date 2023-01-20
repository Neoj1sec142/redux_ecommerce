from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {'write_only': True}
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")
        lookup_field = 'username'
        
class AllUsers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'location', 'is_active']
        ordering = ('-date_joined',)