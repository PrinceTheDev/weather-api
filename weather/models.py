from django.db import models


class LogWeatherRequest(models.Model):
    city = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)
    response_data = models.JSONField()

    def __str__(self):
        return f"{self.city} at {self.timestamp}"
