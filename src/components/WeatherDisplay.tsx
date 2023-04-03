import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import PreferencesContext from '../context/PreferencesContext';
import WeatherContext from '../context/WeatherContext';
import americanTimeToActualTime from '../utils/americanTimeToActualTime';
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
    rain: `${
      prefs?.units === 'metric' ? current.precip_mm : current.precip_in
    }`,
    rainUnit: `${prefs?.units === 'metric' ? 'mm' : 'in'}`,
  };

  return (
    <div
      className={`m-4 p-8 rounded-lg ${
        current.is_day ? `bg-surface0` : `bg-mantle`
      } flex flex-col place-content-center drop-shadow hover:drop-shadow-lg 2xl:max-w-md 2xl:mx-auto gap-2`}
    >
      <div className='flex flex-col gap-1 relative'>
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

      <div className='flex gap-2'>
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
        <div className='flex gap-2'>
          <span>
            <span className='text-blue font-medium'>rain: </span> {units.rain}
            <span className='text-sm'>{units.rainUnit}</span>
          </span>
          <span>
            <span className='text-blue font-medium'>chance: </span>{' '}
            {forecastday[0].day.daily_chance_of_rain}%{' '}
          </span>
        </div>
      </div>

      <div>
        <div className='flex flex-row gap-2'>
          <span className=''>
            <span className='text-flamingo font-medium'>wind: </span>{' '}
            {units.wind}
            <span className='text-sm'>{units.windUnit}</span> {windDirection}
          </span>
          <FaArrowUp
            className='my-auto text-flamingo'
            style={{ transform: `rotate(${current.wind_degree}deg)` }}
          />
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <span className=''>
          <span className='text-yellow font-medium'>sunrise: </span>{' '}
          {americanTimeToActualTime(forecastday[0].astro.sunrise)}
        </span>
        <span className=''>
          <span className='text-lavender font-medium'>sunset: </span>{' '}
          {americanTimeToActualTime(forecastday[0].astro.sunset)}
        </span>
      </div>
    </div>
  );
}
