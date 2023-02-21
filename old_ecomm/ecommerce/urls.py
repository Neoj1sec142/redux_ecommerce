from .serializers import *
from django.urls import path
from .views import *

urlpatterns = [
    path('', ProductList.as_view()),
    path('<int:pk>/', ProductDetail.as_view()),
    path('purchase/', PurchaseList.as_view()),
    path('purchase/<int:pk>/', PurchaseDetail.as_view()),
    path('purchase/<int:purchase_pk>/items/', PurchaseItems.as_view()),
    path('user/purchase/<int:user_pk>/', PurchasesByUser.as_view()),
    path('reviews/', CreateReview.as_view()),
    path('<int:product_pk>/reviews/', ReviewListByProduct.as_view()),
    path('reviews/<int:pk>/', ReviewDetail.as_view()),
]