import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function Header() {
  const { isLoading, error, weatherData } = useContext(WeatherContext);
  return (
    <div>
      <h1>Weather for {weatherData && weatherData.name}</h1>
      {isLoading && <h1>Loading</h1>}
      {error && <p>{error}</p>}
    </div>
  );
}
