from django.urls import path
from .views import *

urlpatterns = [
    path('browse/', BrowseList.as_view(), name='browse-list'),
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('reviews/', ReviewList.as_view(), name='review-list'),
    path('reviews/<int:pk>/', ReviewDetail.as_view(), name='review-detail'),
    path('product/<int:pk>/reviews/', ProductReviewList.as_view(), name='product-review-list'),
    path('user/<int:pk>/profile/', UserProfileView.as_view(), name='user-review-list'),
    path('purchases/', PurchaseList.as_view(), name='purchase-list'),
    path('purchases/<int:pk>/', PurchaseDetail.as_view(), name='purchase-detail'),
    path('purchase-products/', PurchaseProductList.as_view(), name='purchase-product-list'),
    path('purchase-products/<int:pk>/', PurchaseProductDetail.as_view(), name='purchase-product-detail'),
]