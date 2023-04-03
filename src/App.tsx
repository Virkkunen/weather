import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import ErrorBox from './components/ErrorBox';
import Footer from './components/Footer';
import ForecastDisplay from './components/ForecastDisplay';
import Header from './components/Header';
import Loading from './components/Loading';
import MiscCard from './components/MiscCard';
import PrefsBox from './components/PrefsBox';
import { SearchBar } from './components/SearchBar';
import SkeletonDisplay from './components/SkeletonDisplay';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData, searchLoading, searchDisplay } =
    useContext(WeatherContext);

  return (
    <div className='md:grid md:grid-cols-1 md:grid-rows-6 md:h-screen 2xl:grid-rows-3 2xl:items-center 2xl:h-screen 2xl:max-w-4xl md:mx-auto'>
      {isLoading && <Loading />}
      <PrefsBox />
      <ErrorBox />
      <div className='transition ease-in-out duration-200 max-md:fixed max-md:top-0 max-md:z-50 max-md:w-full md:row-span-1 md:row-start-1'>
        <Header />
        <Transition
          show={searchDisplay}
          enter='transition duration-150 easy-out'
          enterFrom='opacity-0 transform -translate-y-2'
          enterTo='opacity-100 transform translate-y-0'
          leave='transition duration-150 easy-in'
          leaveFrom='transform translate-y-0 opacity-100 '
          leaveTo='opacity-0 transform -translate-y-2'
          className={`bg-crust drop-shadow px-4 mb-4 pb-4 rounded-b-lg mx-auto md:rounded-b-lg md:flex md:justify-center md:container 2xl:p-2 2xl:my-0 2xl:flex 2xl:justify-center 2xl:w-1/2 2xl:row-start-1`}
        >
          <SearchBar />
        </Transition>
      </div>
      <div
        className={`${searchDisplay ? 'mt-40' : 'mt-24'} mb-16 overflow-y-scroll grid grid-cols-1 grid-flow-row place-content-center transition-all ease-in-out duration-300 md:row-start-2 md:row-span-4 md:flex md:flex-col md:mx-auto md:my-0 md:max-2xl:items-center 2xl:row-start-2 2xl:row-span-1 2xl:flex-col 2xl:m-0`}
      >
        <div className='xl:flex 2xl:flex-row'>
          <Transition
            show={Boolean(weatherData)}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='2xl:flex-auto'
          >
            {weatherData && !searchLoading && <WeatherDisplay />}
            {searchLoading && <SkeletonDisplay />}
          </Transition>
          <Transition
            show={Boolean(weatherData)}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='2xl:flex-auto'
          >
            {weatherData && !searchLoading && <ForecastDisplay />}
            {searchLoading && <SkeletonDisplay />}
          </Transition>
        </div>
        <Transition
          show={Boolean(weatherData)}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='2xl:flex-1 md:flex-initial'
        >
          {weatherData && !searchLoading && <MiscCard />}
          {searchLoading && <SkeletonDisplay />}
        </Transition>
      </div>
      <Footer />
    </div>
  );
}

export default App;
