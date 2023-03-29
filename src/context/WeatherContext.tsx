import { createContext } from "react";
import { WeatherContextType, WeatherData } from '../types/types';

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  error: null,
  isLoading: false,
  searchQuery: null,
  setSearchQuery: (query: string) => {},
  handleSearchSubmit: (e?: React.FormEvent<HTMLFormElement>) => {},
  fetchWeather: (lat: number | null, lon: number | null, query: string | undefined) => {},
  setWeatherData: (data: WeatherData) => {},
  setError: (err: any) => {},
  searchDisplay: false,
  setSearchDisplay: () => {},
});

export default WeatherContext;