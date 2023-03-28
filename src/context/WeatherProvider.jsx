import React, { useState, useEffect } from 'react';
import WeatherContext from './WeatherContext';

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (lat, lon) => {
    const apiKey = 'b9c3d2373adfa2f6f8107df3c60b4486';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      setIsLoading(true);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        const apiError = new Error(
          `Error ${response.status} while fetching data from ${url}`
        );
        apiError.response = response;
        throw apiError;
      }
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude));
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, error, isLoading }}>
      { children }
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;