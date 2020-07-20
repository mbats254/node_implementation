from django.urls import path
from django.conf.urls import url, include

from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    path('contact/post/', views.ContactPost.as_view()),
    
    
]   