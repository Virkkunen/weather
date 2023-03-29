import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { SearchBar } from './SearchBar';
import { FaSearch, FaStar, FaRegStar } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

export default function Header() {
  const { weatherData, searchDisplay, setSearchDisplay } =
    useContext(WeatherContext);

  const handleClick = () => setSearchDisplay(!searchDisplay);

  return (
    <>
      <div className='container grid grid-flow-col grid-cols-6 grid-rows-2 mx-auto p-8 mb-4 rounded-b-lg bg-base drop-shadow place ease-in-out duration-200'>
        <button
          type='button'
          className='m-auto col-start-1 col-span-1 hover:text-lavender active:text-opacity-60 ease-in-out duration-200'
          onClick={handleClick}
        >
          <FaSearch size='20px' />
        </button>
        {weatherData && (
          <span className='text-xl text-center my-auto col-start-2 col-span-4'>
            {weatherData.name}
          </span>
        )}
        <button
          type='button'
          className='m-auto col-start-6 col-span-1 hover:text-peach active:text-opacity-60 ease-in-out duration-200'
        >
          <FaRegStar size='20px' />
        </button>
        <Transition
          show={searchDisplay}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='col-span-6'
        >
          <SearchBar />
        </Transition>
      </div>
    </>
  );
}
