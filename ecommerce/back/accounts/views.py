from rest_framework.views import APIView
from rest_framework import permissions
from user_profile.models import UserProfile
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib import auth
from .serializers import UserSerializer


class CheckAuthenticated(APIView):
    def get(self, request, format=None):
        user = self.request.user
        try:
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})
        except:
            return Response({'error': "Something went wrong when checking auth status"})


@method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    '''This model will be set to be viewed by anybody
    since they cant be logged in to sign up we will
    make the auth to allow any'''
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        re_password = data['re_password']
        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({'error': 'Username Already exists'})
                else:
                    if len(password) < 6:
                        return Response({'error': 'Password must be at least 6 characters'})
                    else: 
                        user = User.objects.create_user(username=username, password=password)
                        
                        user = User.objects.get(id=user.id)
                        UserProfile.objects.create(user=user, first_name='', last_name='', phone='', city='')
                        
                        return Response({'success': 'User created successfully'})
            else:
                return Response({'error': 'Passwords do not match'})
        except:
                return Response({'error': "Something went wrong registering account"})
        
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def get(self, request, format=None):
        return Response({'success': 'CSRF Cookie Set'})
 
@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        try:
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
                return Response({'success':'User authenticated'})
            else:
                return Response({'error':'Error authenticating'})
        except:
            return Response({'error': "Something went wrong logging in"})
        
class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'success':'Logged Out'})
        except:
            return Response({'error':'Something went wrong logging out'})
        
class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user
        try:
            user = User.objects.filter(id=user.id).delete()
            return Response({'success': 'Account Successfully deleted'})
        except:
            return Response({'error': 'Something went wrong deleting user'})
        
class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        users = User.objects.all()
        users = UserSerializer(users, many=True)
        return Response(users.data)