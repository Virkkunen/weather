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
  const { fetchWeather, setWeatherData, setError, setSearchDisplay, setIsLoading } = useContext(WeatherContext);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    []
  );

  const handleSearchSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const data = await fetchWeather(null, null, searchQuery);
        setWeatherData(data!);
        setError(null);
        setSearchDisplay(false);
      } catch (err: any) {
        setError({ code: 404, message: err });
      } finally {
        setSearchQuery('');
        setIsLoading(false);
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
