export type WeatherContextType = {
  weatherData: WeatherData | null;
  error: any | null;
  isLoading: boolean;
  searchQuery: string | null;
  setSearchQuery: (query: string) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fetchWeather: (lat: number | null, lon: number | null, query: string | undefined) => void;
  setWeatherData: (data: WeatherData) => void;
  setError: (err: any) => void;
  searchDisplay: boolean;
  setSearchDisplay: (arg0: boolean) => void;
  searchLoading: boolean;
  setSearchLoading: (arg0: boolean) => void;
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