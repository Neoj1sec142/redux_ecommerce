from rest_framework import generics, status
from django.db.models import Count, Avg
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product, Purchase, PurchaseProduct, Review
from .serializers import ProductSerializer, PurchaseSerializer, PurchaseProductSerializer, ReviewSerializer, BrowseSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class BrowseList(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        products = Product.objects.annotate(
            review_count=Count('review'),
            avg_stars=Avg('review__stars')
        ).values('id', 'name', 'price', 'category', 'image', 'created_at', 'review_count', 'avg_stars')

        serializer = BrowseSerializer(products, many=True)
        return Response(serializer.data)

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

class ProductReviewList(APIView):
    permission_classes = [AllowAny]
    def get(self, request, pk):
        try:
            product = Product.objects.get(pk=pk)
            reviews = Review.objects.filter(product=product)
            product_serializer = ProductSerializer(product)
            review_serializer = ReviewSerializer(reviews, many=True)
            return Response({
                'product': product_serializer.data,
                'reviews': review_serializer.data
            })
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, pk):
        try:
            reviews = Review.objects.filter(author=pk)
            review_serializer = ReviewSerializer(reviews, many=True)
            return Response({
                'reviews': review_serializer.data
            })
        except Product.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
            
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