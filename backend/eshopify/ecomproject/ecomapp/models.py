from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Products(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    product_name=models.CharField(max_length=150)
    product_image=models.ImageField(null=True,blank=True)
    product_brand=models.CharField(max_length=150,null=True,blank=True)
    product_category=models.CharField(max_length=150,null=True,blank=True)
    product_info=models.TextField(null=True,blank=True)
    product_rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
    product_numreviews=models.IntegerField(default=0,null=True,blank=True)
    product_price=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
    product_stock=models.IntegerField(max_length=7,null=True,blank=True)
    product_createdAt=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)
    slug = models.SlugField(max_length=250, unique=True, blank=True)


    def __str__(self) -> str:
        return self.product_name