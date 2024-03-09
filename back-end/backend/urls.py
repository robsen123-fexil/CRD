from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from user_api.views import index
from user_api.views import SongView

# import Routers conf from rest frameework
from rest_framework import routers


route = routers.DefaultRouter()
route.register("", SongView, basename='Songview')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('', index, name='index'),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
