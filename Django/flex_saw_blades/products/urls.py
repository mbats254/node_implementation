from django.urls import path
from django.conf.urls import url, include

from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    path('products/', views.ProductList.as_view()),
    path('categories/', views.CategoryList.as_view()),
    
]   