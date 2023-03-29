import React, { useState, useEffect, useCallback, useMemo } from 'react';
import WeatherContext from './WeatherContext';
import { WeatherData, Props } from '../types/types';
import { useSearch } from '../hooks/useSearch';
import { useGeolocation } from '../hooks/useGeolocation';
import fetchWeather from '../utils/fetchWeather';

const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { searchQuery, setSearchQuery, handleSearchSubmit } = useSearch();
  const { coordinates, error, setError } = useGeolocation();

  useEffect(() => {
    if (!coordinates) {
      setIsLoading(false);
      return;
    }

    const { latitude, longitude } = coordinates;
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchWeather(latitude, longitude);
        setWeatherData(data);
        setError(null);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, [coordinates]);

  const value = useMemo(
    () => ({
      weatherData,
      error,
      isLoading,
      searchQuery,
      setSearchQuery,
      handleSearchSubmit,
      fetchWeather,
      setWeatherData,
      setError,
    }),
    [
      weatherData,
      error,
      isLoading,
      searchQuery,
      setSearchQuery,
      handleSearchSubmit,
      fetchWeather,
      setWeatherData,
      setError,
    ]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;