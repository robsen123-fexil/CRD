from django.shortcuts import render
from django.urls import path, include
from django.contrib.auth.models import User
from django.urls import path
from .views import index

urlpatterns = [
    
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
      path('', index, name='index'),

   
]
