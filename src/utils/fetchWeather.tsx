import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { ApiError, WeatherData } from '../types/types';

const fetchWeather = async (query: string | null): Promise<WeatherData> => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=3&aqi=no&alerts=no`
  console.log(apiUrl)
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const apiError: ApiError = new Error(
        `Error ${response.status} while fetching data from ${apiUrl}`
      );
      apiError.response = response;
      throw apiError;
    }
    const data = await response.json();
    data.forecast.forecastday.forEach((day: any) => delete day.hour);
    return data;
  } catch (err: any) {
    throw err;
  }
};

export default fetchWeather;