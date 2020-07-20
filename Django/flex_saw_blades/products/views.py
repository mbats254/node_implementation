from django.shortcuts import render,get_object_or_404
from .models import Products,Category
from django.http import HttpResponse
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import ProductsSerializer,CategorySerializer
# from django.shortcuts import render_to_response
# import MySQLdb
# Create your views here.


# def book_list(request):
#     db = MySQLdb.connect(user='mbatia', db='', passwd='secret', host='localhost')
#     cursor = db.cursor()
#     cursor.execute('SELECT name FROM books ORDER BY name')

class ProductList(APIView):
    def get(self, request):
        products = Products.objects.all()
        serializer = ProductsSerializer(products, many= True)
        return Response(serializer.data)

class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many= True)
        return Response(serializer.data) 


