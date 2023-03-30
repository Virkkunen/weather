import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const MiscCard = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current } = weatherData!;

  return (
    <div
      className={`m-4 p-8 rounded-lg ${
        current.is_day ? `bg-surface0` : `bg-mantle`
      } flex flex-col place-content-center drop-shadow hover:drop-shadow-lg md:max-w-md md:mx-auto gap-2`}
    >
      <span className='font-medium'>
        Last updated at:{' '}
        <span className='text-sm font-normal'>{current.last_updated} (local time)</span>
      </span>
      <span className='text-sm'>
        Powered by{' '}
        <a
          href='https://www.weatherapi.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-lavender active:text-opacity-60 ease-in-out duration-200'
          title='Free Weather API'
        >
          WeatherAPI.com
        </a>
      </span>
    </div>
  );
};

export default MiscCard;
