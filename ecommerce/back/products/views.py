from rest_framework import generics, permissions
from .models import Product
from .serializers import ProductSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Product
        fields = ('__all__')
        ordering = ('-date_created')
        
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
