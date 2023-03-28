export type WeatherContextType = {
  weatherData: WeatherData | null;
  error: string | null;
  isLoading: boolean | null;
};

export interface WeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
}

export interface Props {
  children: React.ReactNode;
}

export interface ApiError extends Error {
  response?: Response;
}