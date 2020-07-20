from django.db import models
from uuid import uuid4
# Create your models here.
class ProductType(models.Model):
    name= models.CharField(max_length=32)
    uniqid = models.CharField(max_length=50,default=uuid4())

    def __str__(self):
        return f"{self.name}"
        
class Category(models.Model):
    name = models.CharField(max_length=32)
    uniqid = models.CharField(max_length=50,default=uuid4())
    product_type = models.ForeignKey(ProductType,on_delete=models.CASCADE,related_name="types",blank=True, null=True)

    def __str__(self):
        return f"{self.name}"

class Products(models.Model):
    name = models.CharField(max_length=34)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name="category_name")
    price = models.IntegerField()
    status = models.IntegerField(default='0')
    

    def __str__(self):
        return f"{self.name} -{self.category}"


    

