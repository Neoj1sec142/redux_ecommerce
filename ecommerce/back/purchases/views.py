from rest_framework import generics, permissions
from .models import Purchase
from .serializers import PurchaseSerializer

class PurchaseList(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Purchase
        fields = ('__all__')
        ordering = ('-date_created')
        
class PurchaseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer