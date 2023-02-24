from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, PaymentMethod
from .serializers import UserSerializer, PublicUserSerializer,\
    PaymentMethodSerializer, ProtectedPaymentMethodSerializer

class UserList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
    queryset = User.objects.all()


class PublicUsersList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = PublicUserSerializer
    queryset = User.objects.all()


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailByUsername(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

    

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    
class PaymentMethodList(generics.ListAPIView):
    serializer_class = ProtectedPaymentMethodSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        card_owner = self.kwargs['user_pk']
        queryset = PaymentMethod.objects.filter(card_owner=card_owner)
        return queryset
class CreatePaymentMethod(generics.CreateAPIView):
    queryset = PaymentMethod.objects.all()
    serializer_class = ProtectedPaymentMethodSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    
class PaymentMethodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PaymentMethod.objects.all()
    serializer_class = PaymentMethodSerializer
    permission_classes = [permissions.IsAuthenticated]