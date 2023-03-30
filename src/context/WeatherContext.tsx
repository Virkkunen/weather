import { createContext } from "react";
import { WeatherContextType, WeatherData } from '../types/types';

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  error: null,
  isLoading: true,
  handleSearchSubmit: (e?: React.FormEvent<HTMLFormElement>) => {},
  fetchWeather: (query: string | null) => {},
  setWeatherData: (data: WeatherData) => {},
  setError: (err: any) => {},
  searchDisplay: false,
  setSearchDisplay: () => {},
  setSearchLoading: () => {},
  searchLoading: false,
  query: null,
  setQuery: (query: string) => {},
});

export default WeatherContext;