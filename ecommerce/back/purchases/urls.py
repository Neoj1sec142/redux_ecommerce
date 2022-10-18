from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('', PurchaseList.as_view(), name='purchase_list'),
    path('<int:pk>', PurchaseDetail.as_view(), name='purchase_detail'),
]