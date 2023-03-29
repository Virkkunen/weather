import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import WeatherContext from '../context/WeatherContext';
import windDegreeToDirection from '../utils/windDegreeToDirection';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { main, weather, wind } = weatherData!; // TODO: change to weatherData ?? {} and properly validate

  const iconSrc = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const windDirection = windDegreeToDirection(wind.deg);

  return (
    <div className='m-4 p-8 rounded-lg bg-surface0 flex flex-col place-content-center drop-shadow hover:drop-shadow-lg md:max-w-md md:mx-auto'>
      <div className='flex flex-col mb-4 relative'>
        <span className='text-6xl font-mono mb-2'>{main.temp.toFixed(0)}°</span>
        <span className='text-sm text-subtext1'>
          {weather[0].description}, feels like {main.feels_like.toFixed(0)}°
        </span>
        <img
          src={iconSrc}
          alt={weather[0].description}
          className='w-24 mx-auto z-0 absolute -top-2 right-0'
        />
      </div>

      <div className='flex mb-4'>
        <span className='mr-2'><span className='text-green'>min: </span>{main.temp_min.toFixed(0)}°</span>
        <span className=''><span className='text-peach'>max: </span> {main.temp_max.toFixed(0)}°</span>
      </div>

      <div className='flex flex-col content-center'>
        <span><span className='text-sapphire'>humidity: </span> {main.humidity}%</span>
        <div className='flex flex-row'>
          <span className='mr-2'>
          <span className='text-flamingo'>wind: </span> {wind.speed} km/h {windDirection}
          </span>
          <FaArrowUp className='my-auto text-flamingo' style={{ transform: `rotate(${wind.deg}deg)` }} />
        </div>
      </div>
    </div>
  );
}
