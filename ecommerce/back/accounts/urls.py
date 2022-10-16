from django.urls import path
from .views import DeleteAccountView, GetUsersView, SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticated

urlpatterns = [
    path('register', SignupView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('authenticated', CheckAuthenticated.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('get_users', GetUsersView.as_view()),
]