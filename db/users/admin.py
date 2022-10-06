from django.contrib import admin
from .models import Profile, User

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(Profile)

