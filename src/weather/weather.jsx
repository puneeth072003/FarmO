import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "04f6ee7fbcaf24d1f22e35f4ffdb3bbe";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: apiKey,
          },
        }
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div>
      <h2>Weather Forecast</h2>
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>{weather.Headline.Text}</h3>
          {/* Display other weather information as needed */}
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
