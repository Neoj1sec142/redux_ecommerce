from .serializers import *
from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # JavaScript Web Tokens
    path('token/obtain/',  jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),    name='token-refresh'),
    path('blacklist/', UserLogout.as_view(), name='token-blacklist'),
    # User Routes
    path('users/', UserList.as_view()),
    path('public/users/', PublicUsersList.as_view()),
    path('users/create/', UserCreate.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('users/payment-methods/<int:user_pk>/', PaymentMethodList.as_view()),
    path('payment-methods/<int:pk>/', PaymentMethodDetail.as_view()),
    path('payment-methods/', CreatePaymentMethod.as_view()),
    path('users/logout/', UserLogout.as_view()),
    path('users/<str:username>/', UserDetailByUsername.as_view())
]