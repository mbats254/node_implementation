from rest_framework import serializers
from .models import Products, Category


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        # fields = ('name','category','price')
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
