import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className='m-4 p-8 rounded-lg flex flex-col bg-surface0'>
      <div className='flex justify-around'>
      <span className='text-6xl font-mono mb-4 text-center'>{weatherData?.main.temp}°</span>
      </div>
      <div className='flex justify-around'>
        <span className='font-mono'>min: {weatherData?.main.temp_min}°</span>
        <span className='font-mono'>max: {weatherData?.main.temp_max}°</span>
      </div>
    </div>
  );
}
