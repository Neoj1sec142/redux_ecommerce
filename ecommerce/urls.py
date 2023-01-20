from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('', ProductList.as_view()),
    path('<int:pk>/', ProductDetail.as_view()),
    path('purchase/', PurchaseList.as_view()),
    path('purchase/<int:pk>/', PurchaseDetail.as_view()),
    path('user/purchase/<int:user_pk>/', PurchaseDetail.as_view()),
]