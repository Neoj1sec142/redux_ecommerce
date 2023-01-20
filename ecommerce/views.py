from rest_framework import generics, permissions
from .models import Product, Purchase
from .serializers import ProductSerializer, PurchaseSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Product
        fields = ('__all__')

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class PurchaseList(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Purchase
        fields = ('__all__')
        ordering = ('-date_created')


class PurchaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    
class PurchasesByUser(generics.ListAPIView):
    serializer_class = PurchaseSerializer
    permission_classes = (permissions.AllowAny,)
    def get_queryset(self):
        customer = self.kwargs['user_pk']
        queryset = Purchase.objects.filter(customer=customer)
        return queryset