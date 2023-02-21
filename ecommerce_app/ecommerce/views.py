from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Product, Purchase, PurchaseProduct, Review
from .serializers import ProductSerializer, PurchaseSerializer, PurchaseProductSerializer, ReviewSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

class PurchaseList(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = [IsAuthenticated]

class PurchaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = [IsAuthenticated]
    
class PurchaseProductList(generics.ListCreateAPIView):
    queryset = PurchaseProduct.objects.all()
    serializer_class = PurchaseProductSerializer
    permission_classes = [IsAuthenticated]

class PurchaseProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PurchaseProduct.objects.all()
    serializer_class = PurchaseProductSerializer
    permission_classes = [IsAuthenticated]