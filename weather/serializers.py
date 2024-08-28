from rest_framework import serializers
from .models import LogWeatherRequest


class LogWeatherRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogWeatherRequest
        fields = '__all__'
