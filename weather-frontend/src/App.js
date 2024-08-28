import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);


  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/weather/?city=${city}`);
      setWeatherData(response.data);
  }   catch (error) {
      console.error("Error fetching weather data:", error)
    }

  };

  return (
    <div className="App">
      <h1>7-Day Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          {weatherData.list.map((day, index) => (
            <div key={index}>
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>Temperature: {day.temp.day}°C</p>
              <p>Weather: {day.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
