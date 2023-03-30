import { useCallback, useContext, useState } from 'react';
import ErrorContext from '../context/ErrorContext';
import WeatherContext from '../context/WeatherContext';

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch = (): SearchState => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchWeather, setWeatherData, setSearchDisplay, setSearchLoading } = useContext(WeatherContext);
  const { setError } = useContext(ErrorContext);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    []
  );

  const handleSearchSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setSearchLoading(true);
        const data = await fetchWeather(searchQuery.toLowerCase().replace(/ /g, '_'));
        setWeatherData(data!);
        setError(null);
        setSearchDisplay(false);
      } catch (err: any) {
        setError(err.response);
      } finally {
        setSearchQuery('');
        setSearchLoading(false);
      }
    },
    [searchQuery]
  );

  return {
    searchQuery,
    setSearchQuery,
    handleSearchSubmit,
    handleSearchChange,
  };
};
