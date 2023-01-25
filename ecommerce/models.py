from django.db import models
from users.models import User

class Product(models.Model):
    # class Category(models.TextChoices):
    #     ELECTRONICS = 'House'
    #     MEDIA = 'Condo'
    #     HOME = 'Townhouse'  
    title = models.CharField(max_length=150)
    description = models.TextField()
    price = models.IntegerField()
    # category = models.CharField(max_length=50, choices=Category.choices, default=Category.MEDIA)
    # NEED TO ADD THE REST OF FIELDS VIA IMG CATAGORY >>>
    def __str__(self):
        return self.title

class Purchase(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name="purchased_products")
    total = models.IntegerField()
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return f"{self.customer} : {self.total}"

class Review(models.Model):
    stars = models.IntegerField()
    comment = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.comment[:20]