from django.shortcuts import render

from .models import Song
from .serializers import SongSerializer
from rest_framework import viewsets

# Create your views here.

class SongView(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
def index(request):
    context = {
        'title': 'My Django App',
        'greeting': 'Welcome to my app!',
    }
    return render(request, 'home.html', context)