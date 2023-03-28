import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { main, weather } = weatherData!; // TODO: change to weatherData ?? {} and properly validate
  const iconSrc = `http://openweathermap.org/img/wn/${weather[0].icon}.png`

  return (
    <>
      <div className='m-4 p-8 rounded-lg bg-surface0 flex flex-col justify-center'>
        <div className='flex flex-col mb-4 text-center'>
          <span className='text-6xl font-mono mb-2'>
            {main.temp.toFixed(0)}°
          </span>
          <span>{weather[0].description}</span>
          <img src={iconSrc} alt={weather[0].description} className='w-24 mx-auto' />
        </div>
        <div className='flex justify-around'>
          <span className='font-mono'>min: {main.temp_min.toFixed(0)}°</span>
          <span className='font-mono'>max: {main.temp_max.toFixed(0)}°</span>
        </div>
      </div>
    </>
  );
}
