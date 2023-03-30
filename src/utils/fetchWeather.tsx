import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { ApiError, WeatherData } from '../types/types';

const fetchWeather = async (query: string | null): Promise<WeatherData> => {
  console.log(`query on fetchWeather ${query}`)
  // const { setError } = useContext(WeatherContext);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=3&aqi=no&alerts=no`
  
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
    console.log(data)
    return data;
  } catch (err: any) {
    throw err;
  }
};

export default fetchWeather;