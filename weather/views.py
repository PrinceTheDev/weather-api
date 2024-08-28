import requests
from django.http import JsonResponse
import os


def get_weather(request):
    city = request.GET.get('city')
    api_key = os.getenv('OPEN_WEATHER_API')  # Fetch API key from .env
    if not api_key:
        return JsonResponse({"error": "API key is missing"}, status=500)
    
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    response = requests.get(url)
    if response.status_code == 200:
        return JsonResponse(response.json())
    else:
        return JsonResponse(response.json(), status=response.status_code)

