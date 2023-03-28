import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import windDegreeToDirection from '../utils/windDegreeToDirection';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { main, weather, wind } = weatherData!; // TODO: change to weatherData ?? {} and properly validate

  const iconSrc = `http://openweathermap.org/img/wn/${weather[0].icon}.png`
  const windDirection = windDegreeToDirection(wind.deg);

  return (
    <>
      <div className='m-4 p-8 rounded-lg bg-surface0 flex flex-col justify-center'>

        <div className='flex flex-col mb-4 text-center'>
          <span className='text-6xl font-mono mb-2'>
            {main.temp.toFixed(0)}°
          </span>
          <span className='text-sm'>{weather[0].description}, feels like {main.feels_like.toFixed(0)}°</span>
          <img src={iconSrc} alt={weather[0].description} className='w-24 mx-auto' />
        </div>

        <div className='flex justify-around mb-4'>
          <span className=''>min: {main.temp_min.toFixed(0)}°</span>
          <span className=''>max: {main.temp_max.toFixed(0)}°</span>
        </div>

        <div className='flex justify-around'>
          <span>humidity: {main.humidity}%</span>
          <span>wind: {wind.speed}km/h {windDirection}</span>
        </div>

      </div>
    </>
  );
}
