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
    path('users/', UserList.as_view(), name='user_list'),
    path('users/create/', UserCreate.as_view(), name='user_create'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user_detail'),
    path('users/logout/', UserLogout.as_view(), name='user_logout'),
    path('users/<str:username>/', UserDetailByUsername.as_view(), name='user_detail_by_username'),
    path('profiles/', ProfileList.as_view(), name='profile_list'),
    path('profiles/<int:pk>/', ProfileDetail.as_view(), name='profile_detail'),
]