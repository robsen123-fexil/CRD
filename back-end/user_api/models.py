from django.db import models

# Create your models here.

# Our API Models 

class Song(models.Model):
    artist=models.CharField(max_length=200, default=None)
    album=models.CharField(max_length=100,  default=None)
    audio=models.FileField(upload_to='audio/files' , null=True , blank=True, default=None)
    image = models.ImageField(upload_to='thumbnail/images', null=True, blank=True , default=None)
    title = models.CharField(max_length=100,blank=False, null=False , default=None)
    category = models.CharField(max_length=50,blank=False, null=False , default=None)
    description = models.TextField(blank=True, null=True,  default=None )
    demo = models.CharField(max_length=150, blank=True, null=True ,  default=None)

    def __str__(self):
        return self.title