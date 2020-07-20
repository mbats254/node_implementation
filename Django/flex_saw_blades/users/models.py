from django.db import models
from uuid import uuid4
# Create your models here.
class Users(models.Model):
    name= models.CharField(max_length=32)
    email= models.CharField(max_length=32)
    contact = models.CharField(max_length=10)
    password = models.CharField(max_length=55)

    def __str__(self):
        return f"{self.name}"
        
class Flex_Admin(models.Model):
    name= models.CharField(max_length=32)
    email= models.CharField(max_length=32)
    contact = models.CharField(max_length=10)
    user_id = models.ForeignKey(Users,on_delete=models.CASCADE,related_name="flex_admin")
    uniqid = models.CharField(max_length=50,default=uuid4())
     
    def __str__(self):
        return f"{self.name}"
        
class Buyer(models.Model):
    name= models.CharField(max_length=32)
    email= models.CharField(max_length=32)
    contact = models.CharField(max_length=10)
    user_id = models.ForeignKey(Users,on_delete=models.CASCADE,related_name="buyer")
    # wishlist = models.CharField(max_length=10)
    def __str__(self):
        return f"{self.name}"

class Contact(models.Model):
    name= models.CharField(max_length=32)
    email= models.CharField(max_length=32)
    message = models.CharField(max_length=100)
    # wishlist = models.CharField(max_length=10)
    def __str__(self):
        return f"{self.name} - {self.message}"       