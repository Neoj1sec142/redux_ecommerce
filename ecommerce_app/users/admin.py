from django.contrib import admin
from .models import User, PaymentMethod

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(PaymentMethod)