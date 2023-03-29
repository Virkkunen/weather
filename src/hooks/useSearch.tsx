import { useCallback, useContext, useState } from 'react';
import WeatherContext from '../context/WeatherContext';

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch = (): SearchState => {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchWeather, setWeatherData } = useContext(WeatherContext);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    []
  );

  const handleSearchSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const data = await fetchWeather(null, null, searchQuery);
        setWeatherData(data!);
      } catch (err: any) {
        throw err;
      } finally {
        setSearchQuery('');
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
