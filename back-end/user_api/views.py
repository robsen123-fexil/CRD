from django.shortcuts import render

from .models import Song
from .serializers import SongSerializer
from rest_framework import viewsets

# Create your views here.

class SongView(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
