import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const SkeletonDisplay = () => {
  const { weatherData } = useContext(WeatherContext);
  const { current } = weatherData!;

  return (
    <div className={`m-4 p-8 rounded-lg ${current.is_day ? `bg-surface0` : `bg-mantle`} flex flex-col place-content-center drop-shadow hover:drop-shadow-lg 2xl:max-w-md 2xl:mx-auto`}>
      <div className='flex flex-col relative animate-pulse mb-3'>
        <div className='h-12 w-20 bg-overlay0 mb-6 rounded-md' />
        <div className='h-3 w-48 bg-overlay0 rounded-md' />
        <div className='h-10 w-10 bg-overlay0 rounded-full z-0 absolute top-2 right-2' />
        <div className='flex mt-6 mb-6'>
          <div className='h-3 w-16 bg-overlay0 rounded-md mr-4' />
          <div className='h-3 w-16 bg-overlay0 rounded-md' />
        </div>
        <div className='flex flex-col content-center'>
          <div className='h-3 w-24 bg-overlay0 rounded-md mb-3' />
          <div className='h-3 w-36 bg-overlay0 rounded-md mb-0' />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDisplay;
