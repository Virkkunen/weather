import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import WeatherContext from '../context/WeatherContext';
import windDegreeToDirection from '../utils/windDegreeToDirection';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { current, forecast: { forecastday } } = weatherData!;
  const windDirection = windDegreeToDirection(current.wind_degree);

  return (
    <div className={`m-4 p-8 rounded-lg ${current.is_day ? `bg-surface0` : `bg-mantle`} flex flex-col place-content-center drop-shadow hover:drop-shadow-lg md:max-w-md md:mx-auto`}>
      <div className='flex flex-col mb-4 relative'>
        <span className='text-6xl font-mono mb-2'>{current.temp_c.toFixed(0)}°</span>
        <span className='text-sm text-subtext1'>
          {current.condition.text.toLowerCase()}, feels like {current.feelslike_c.toFixed(0)}°
        </span>
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className='w-24 mx-auto z-0 absolute -top-2 right-0'
        />
      </div>

      <div className='flex mb-4'>
        <span className='mr-2'><span className='text-green'>min: </span>{forecastday[0].day.mintemp_c.toFixed(0)}°</span>
        <span className=''><span className='text-peach'>max: </span> {forecastday[0].day.maxtemp_c.toFixed(0)}°</span>
      </div>

      <div className='flex flex-col content-center'>
        <span><span className='text-sapphire'>humidity: </span> {current.humidity}%</span>
        <div className='flex flex-row'>
          <span className='mr-2'>
          <span className='text-flamingo'>wind: </span> {current.wind_kph} km/h {windDirection}
          </span>
          <FaArrowUp className='my-auto text-flamingo' style={{ transform: `rotate(${current.wind_degree}deg)` }} />
        </div>
      </div>
    </div>
  );
}
