from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('products/', ProductList.as_view(), name='product_list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product_detail'),
]