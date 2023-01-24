from rest_framework import generics, permissions
from .models import Product, Purchase, Review
from .serializers import ProductSerializer, PurchaseSerializer, ReviewSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Product
        fields = ('__all__')

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
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
   
class CreateReview(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Review
        fields = ('__all__')
        ordering = ('-date_created')
    
class ReviewListByProduct(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (permissions.AllowAny,)
    def get_queryset(self):
        product = self.kwargs['product_pk']
        queryset = Review.objects.filter(product=product)
        return queryset
    
class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer