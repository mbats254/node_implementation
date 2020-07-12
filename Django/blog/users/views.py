from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import autheticate, login, logout
# Create your views here.
def index(request):
    if not request.user.is_autheticated:
        return render(request,"users/login.html",{"message":None})
    context = {
        "user": request.user
    }
    return render(request,"uses/user.html",context)

def login_view(request):
    username = request.POST["username"] 
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect(revers["index"])
    else:
        return render(request,"users/login.html",{"message":"Invalid Credentials"})

def logout_view(request):
    logout(request)
    return render(request, "users/login.html",{"message":"Logged Out"})        