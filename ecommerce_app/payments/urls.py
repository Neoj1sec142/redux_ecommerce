from django.urls import path
from .views import StripeCheckoutView, OrdersView

urlpatterns = [
    path('create-checkout-session/', StripeCheckoutView.as_view()),
    path('orders/', OrdersView.as_view())
    
]