import React, { useState, useEffect, useCallback, useMemo } from 'react';
import WeatherContext from './WeatherContext';
import { WeatherData, Props } from '../types/types';
import { useSearch } from '../hooks/useSearch';
import fetchWeather from '../utils/fetchWeather';

const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const { handleSearchSubmit } = useSearch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) return;

    const handleSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      const lat = latitude.toFixed(2);
      const lon = longitude.toFixed(2);
      const queryCoords = `${lat},${lon}`;
      setQuery(queryCoords);
      setError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      console.error(err);
      setError(err);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      setSearchDisplay(true);
      return;
    }

    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        console.log(`query on try fetch ${query}`)
        const data = await fetchWeather(query);
        setWeatherData(data);
        setError(null);
        setSearchDisplay(false);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();

    
  }, [query]);

  const value = useMemo(
    () => ({
      weatherData,
      error,
      isLoading,
      handleSearchSubmit,
      fetchWeather,
      setWeatherData,
      setError,
      searchDisplay,
      setSearchDisplay,
      searchLoading,
      setSearchLoading,
      query,
      setQuery,
    }),
    [
      weatherData,
      error,
      isLoading,
      handleSearchSubmit,
      fetchWeather,
      setWeatherData,
      setError,
      searchDisplay,
      setSearchDisplay,
      searchLoading,
      setSearchLoading,
      query,
      setQuery,
    ]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
