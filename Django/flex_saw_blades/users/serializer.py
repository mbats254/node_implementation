from rest_framework import serializers
from .models import Users, Buyer, Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        # fields = ('name','category','price')
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
