# Generated by Django 5.0.1 on 2024-03-06 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0005_alter_project_album_alter_project_artist_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='album',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='artist',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='project',
            name='audio',
            field=models.FileField(blank=True, default=None, null=True, upload_to='audio/files'),
        ),
        migrations.AlterField(
            model_name='project',
            name='category',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, default=None, null=True, upload_to='thumbnail/images'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='youtube_link',
            field=models.CharField(blank=True, default=None, max_length=150, null=True),
        ),
    ]
