from django.urls import path

from user_profile.views import GetUserProfileView, UpdateUserProfileView


urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
]