from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import ContactSerializer
from rest_framework.generics import CreateAPIView
from .models import Contact

# Create your views here.
class ContactPost(CreateAPIView):
        categories = Contact.objects.all()
        serializer = ContactSerializer(categories, many= True)
        