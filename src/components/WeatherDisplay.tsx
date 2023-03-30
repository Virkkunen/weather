import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import PreferencesContext from '../context/PreferencesContext';
import WeatherContext from '../context/WeatherContext';
import windDegreeToDirection from '../utils/windDegreeToDirection';

export default function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { prefs } = useContext(PreferencesContext);
  const {
    current,
    forecast: { forecastday },
  } = weatherData!;
  const windDirection = windDegreeToDirection(current.wind_degree);

  const units = {
    temp: `${
      prefs?.units === 'metric'
        ? current.temp_c.toFixed(0)
        : current.temp_f.toFixed(0)
    }`,
    feelsLike: `${
      prefs?.units === 'metric'
        ? current.feelslike_c.toFixed(0)
        : current.feelslike_f.toFixed(0)
    }`,
    forecastMin: `${
      prefs?.units === 'metric'
        ? forecastday[0].day.mintemp_c.toFixed(0)
        : forecastday[0].day.mintemp_f.toFixed(0)
    }`,
    forecastMax: `${
      prefs?.units === 'metric'
        ? forecastday[0].day.maxtemp_c.toFixed(0)
        : forecastday[0].day.maxtemp_f.toFixed(0)
    }`,
    wind: `${prefs?.units === 'metric' ? current.wind_kph : current.wind_mph}`,
    windUnit: `${prefs?.units === 'metric' ? 'km/h' : 'mp/h'}`,
  };

  return (
    <div
      className={`m-4 p-8 rounded-lg ${
        current.is_day ? `bg-surface0` : `bg-mantle`
      } flex flex-col place-content-center drop-shadow hover:drop-shadow-lg md:max-w-md md:mx-auto`}
    >
      <div className='flex flex-col mb-4 relative'>
        <span className='text-6xl font-mono mb-2'>{units.temp}°</span>
        <span className='text-sm text-subtext1 z-10'>
          {current.condition.text.toLowerCase()}, feels like {units.feelsLike}°
        </span>
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className='w-24 mx-auto z-0 absolute -top-2 right-0'
        />
      </div>

      <div className='flex mb-4 gap-2'>
        <span className=''>
          <span className='text-peach font-medium'>max: </span>{' '}
          {units.forecastMax}°
        </span>
        <span className=''>
          <span className='text-green font-medium'>min: </span>
          {units.forecastMin}°
        </span>
      </div>

      <div className='flex flex-col content-center'>
        <span>
          <span className='text-sapphire font-medium'>humidity: </span>{' '}
          {current.humidity}%
        </span>
        <div className='flex flex-row gap-2'>
          <span className=''>
            <span className='text-flamingo font-medium'>wind: </span>{' '}
            {units.wind} {units.windUnit} {windDirection}
          </span>
          <FaArrowUp
            className='my-auto text-flamingo'
            style={{ transform: `rotate(${current.wind_degree}deg)` }}
          />
        </div>
      </div>
    </div>
  );
}
