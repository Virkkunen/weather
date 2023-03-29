import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { SearchBar } from './SearchBar';

export default function Header() {
  const { isLoading, weatherData } = useContext(WeatherContext);
  return (
    <div className='container mx-auto text-center p-8 mb-4 rounded-b-lg bg-base'>
      {weatherData && <span className='text-xl'>{weatherData.name}</span>}
      <SearchBar />
    </div>
  );
}
