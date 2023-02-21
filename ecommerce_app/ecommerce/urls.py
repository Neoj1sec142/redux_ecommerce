from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('purchases/', PurchaseList.as_view(), name='purchase-list'),
    path('purchases/<int:pk>/', PurchaseDetail.as_view(), name='purchase-detail'),
    path('purchase-products/', PurchaseProductList.as_view(), name='purchase-product-list'),
    path('purchase-products/<int:pk>/', PurchaseProductDetail.as_view(), name='purchase-product-detail'),
]