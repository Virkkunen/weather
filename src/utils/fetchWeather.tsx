import { ApiError, WeatherData } from '../types/types';

const fetchWeather = async (lat: number | null, lon: number | null, query?: string): Promise<WeatherData> => {
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const apiUrl = lat && lon 
      ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      : `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
  
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
    return data;
  } catch (err: any) {
    throw err;
  }
};

export default fetchWeather;