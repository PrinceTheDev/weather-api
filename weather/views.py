from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests
from decouple import config



@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city', '')
    api_key = config('OPEN_WEATHER_API')

    if not city:
        return JsonResponse({'error': 'City parameter is required'}, status=400)
    url = f'http://api.openweathermap.org/data/2.5/forecast/daily?q={city}&cnt=7&appid={api_key}&units=metric'
    response = requests.get(url)

    return JsonResponse(response.json())
