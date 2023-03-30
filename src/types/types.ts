export type WeatherContextType = {
  weatherData: WeatherData | null;
  isLoading: boolean;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fetchWeather: (query: string | null) => void;
  setWeatherData: (data: WeatherData) => void;
  searchDisplay: boolean;
  setSearchDisplay: (arg0: boolean) => void;
  searchLoading: boolean;
  setSearchLoading: (arg0: boolean) => void;
  query: string | null;
  setQuery: (query: string) => void;
};

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
  };
  forecast: {
    forecastday: {
      date: string;
      date_epoch: number;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        totalsnow_cm: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: number;
        daily_will_it_snow: number;
        daily_chance_of_snow: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        uv: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
        is_moon_up: number;
        is_sun_up: number;
      };
    }[];
  };
}

export interface Props {
  children: React.ReactNode;
}

export interface ApiError extends Error {
  response?: Response;
}

export interface ErrorData {
  [key: number]: string;
}

export type ErrorContextType = {
  error: any | null;
  setError: (err: any | null) => void;
  errorMap: ErrorData;
}