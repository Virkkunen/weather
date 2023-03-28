import { createContext } from "react";
import { WeatherContextType } from '../types/types';

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  error: null,
  isLoading: false,
});

export default WeatherContext;