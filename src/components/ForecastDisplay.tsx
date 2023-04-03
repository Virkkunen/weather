import { useContext } from 'react';
import PreferencesContext from '../context/PreferencesContext';
import WeatherContext from '../context/WeatherContext';
import relativeDay from '../utils/relativeDay';

export default function ForecastDisplay() {
  const { weatherData } = useContext(WeatherContext);
  const { prefs } = useContext(PreferencesContext);
  const {
    current,
    forecast: { forecastday },
  } = weatherData!;

  return (
    <div
      className={`m-4 p-8 pb-4 rounded-lg ${
        current.is_day ? `bg-surface0` : `bg-mantle`
      } grid grid-cols-1 grid-rows-3 drop-shadow hover:drop-shadow-lg 2xl:max-w-sm 2xl:mx-auto`}
    >
      {forecastday.map((day) => (
        <div
          className='mb-4 grid grid-flow-col grid-cols-4 gap-4 items-center'
          key={day.date_epoch}
        >
          <p className='font-medium my-auto col-start-1'>{relativeDay(day.date)}</p>
          <div className='grid grid-cols-4 col-start-2 col-span-full place-items-center'>
            <span className='text-center grid grid-cols-1 grid-rows-1'>
              <span className='text-peach font-medium'>max: </span>
              {`${
                prefs?.units === 'metric'
                  ? day.day.maxtemp_c.toFixed(0)
                  : day.day.maxtemp_f.toFixed(0)
              }`}
              °
            </span>

            <span className='text-center grid grid-cols-1 grid-rows-1'>
              <span className='text-green font-medium'>min: </span>
              {`${
                prefs?.units === 'metric'
                  ? day.day.mintemp_c.toFixed(0)
                  : day.day.mintemp_f.toFixed(0)
              }`}
              °
            </span>

            <span className='text-center grid grid-cols-1 grid-rows-1'>
              <span className='text-blue font-medium'>rain: </span>
              {day.day.daily_chance_of_rain}
              %
            </span>

            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className='w-8'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
