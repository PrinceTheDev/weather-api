import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">7-Day Weather Forecast</h1>
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
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {weatherData && (
        <div>
          <h2 className="text-center">Weather in {city}</h2>
          <div className="row">
            {weatherData.list.map((day, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{new Date(day.dt * 1000).toLocaleDateString()}</h5>
                    <p className="card-text">Temperature: {day.temp.day}°C</p>
                    <p className="card-text">Weather: {day.weather[0].description}</p>
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

