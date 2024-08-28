import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styles
import 'weather-icons/css/weather-icons.css';


function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setWeatherData(null);
      setError(null);
      const response = await axios.get(`http://localhost:8000/api/weather/?city=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      setError("Error fetching weather data. Please check the city name and try again.");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (description) => {
    // Map weather descriptions to appropriate icons
    const weatherIcons = {
      'clear sky': 'wi-day-sunny',
      'few clouds': 'wi-day-cloudy',
      'scattered clouds': 'wi-cloud',
      'broken clouds': 'wi-cloudy',
      'shower rain': 'wi-showers',
      'rain': 'wi-rain',
      'thunderstorm': 'wi-thunderstorm',
      'snow': 'wi-snow',
      'mist': 'wi-fog'
    };
    return weatherIcons[description] || 'wi-day-sunny'; // Default icon
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Weather Forecast</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="form-control"
        />
        <button onClick={fetchWeather} className="btn btn-primary">
          Get Weather
        </button>
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger error-alert" role="alert">
          {error}
        </div>
      )}

      {weatherData && (
        <div>
          <h2 className="text-center">Weather in {city}</h2>
          <div className="row">
            {weatherData.list.map((day, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-3 weather-card">
                  <div className="card-body text-center">
                    <i className={`wi ${getWeatherIcon(day.weather[0].description)} weather-icon`}></i>
                    <h5 className="card-title">{new Date(day.dt * 1000).toLocaleDateString()}</h5>
                    <p className="card-text">Temperature: {(day.main.temp - 273.15).toFixed(2)}°C</p>
                    <p className="card-text">Weather: {day.weather[0].description}</p>
                    <p className="card-text">Humidity: {day.main.humidity}%</p>
                    <p className="card-text">Wind Speed: {day.wind.speed} m/s</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

