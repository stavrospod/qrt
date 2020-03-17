from django.db import models

# Create your models here.
class RandomWebsites(models.Model):
    website_name = models.CharField(max_length=64)
    website_url = models.CharField(max_length=64)
    number_of_clicks = models.IntegerField()

    def __str__(self):
        return f"{self.website_name} - {self.website_url} to {self.number_of_clicks}"

