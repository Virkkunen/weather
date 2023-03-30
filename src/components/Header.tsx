import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { FaSearch, FaCog } from 'react-icons/fa';

export default function Header() {
  const { weatherData, searchDisplay, setSearchDisplay, searchLoading } =
    useContext(WeatherContext);

  const handleClick = () => setSearchDisplay(!searchDisplay);

  return (
    <div
      className={`container grid grid-flow-col grid-cols-6 grid-rows-1 mx-auto p-8 ${!searchDisplay && `rounded-b-lg`} 
      bg-base shadow-md ease-in-out duration-200 md:rounded-t-lg ${!searchDisplay && `md:rounded-lg`} md:flex md:flex-row md:justify-evenly md:p-4 md:w-1/2 md:mx-auto md:row-start-1 md:shadow-lg`}
    >
      <button
        type='button'
        className='m-auto col-start-1 col-span-1 hover:text-lavender active:text-opacity-60 ease-in-out duration-200'
        onClick={handleClick}
      >
        <FaSearch size='20px' />
      </button>
      <span className='text-xl text-center my-auto col-start-2 col-span-4'>
        {weatherData && !searchLoading && weatherData.location.name}
        {searchLoading && 'Finding city...'}
      </span>
      <button
        type='button'
        className='m-auto col-start-6 col-span-1 hover:text-green active:text-opacity-60 ease-in-out duration-200'
      >
        <FaCog size='20px' />
      </button>
    </div>
  );
}
