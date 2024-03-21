# Generated by Django 5.0.1 on 2024-03-06 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0004_remove_project_demo_remove_project_thumbnail_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='album',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='artist',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='project',
            name='audio',
            field=models.FileField(blank=True, null=True, upload_to='audio/files'),
        ),
        migrations.AlterField(
            model_name='project',
            name='category',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='thumbnail/images'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='youtube_link',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]