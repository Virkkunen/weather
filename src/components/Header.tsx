import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function Header() {
  const { isLoading, error, weatherData } = useContext(WeatherContext);
  return (
    <div className='container mx-auto text-center p-8 mb-4 rounded-b-lg bg-slate-800'>
      {weatherData && <h1>{weatherData.name}</h1>}
      {error && <p>{error}</p>}
    </div>
  );
}
