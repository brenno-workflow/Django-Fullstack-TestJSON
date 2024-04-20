from django.db import models

# Create your models here.
class HomePageContent(models.Model):
    information = models.TextField()
    objectives = models.TextField()
    demonstrations = models.TextField()
    credits = models.TextField()
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)