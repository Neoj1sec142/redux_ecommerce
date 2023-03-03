from django.db import models
from users.models import User
    
class Product(models.Model):
    class Category(models.TextChoices):
        ELECTRONICS = 'Electronics'
        MEDIA = 'Media'
        GAMES = 'Games'
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    category = models.CharField(max_length=50, choices=Category.choices, default=Category.ELECTRONICS)
    created_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    def __str__(self):
        return self.name
    
class Review(models.Model):
    stars = models.IntegerField()
    comment = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.comment[:20]
  
class Purchase(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('Product', through='PurchaseProduct')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return f"Purchase {self.id} by {self.user.username}"
    
class PurchaseProduct(models.Model):
    purchase = models.ForeignKey(Purchase, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='purchase_products')
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.quantity} of {self.product.name} for purchase {self.purchase.id}"