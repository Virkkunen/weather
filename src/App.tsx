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
    <div className='md:grid md:grid-cols-1 md:grid-rows-3 md:items-center md:h-screen md:max-w-4xl md:mx-auto'>
      {isLoading && <Loading />}
      <PrefsBox />
      <ErrorBox />
      <div className='transition ease-in-out duration-200'>
        <Header />
        <Transition
          show={searchDisplay}
          enter='transition duration-150 easy-out'
          enterFrom='opacity-0 transform -translate-y-2'
          enterTo='opacity-100 transform translate-y-0'
          leave='transition duration-150 easy-in'
          leaveFrom='transform translate-y-0 opacity-100 '
          leaveTo='opacity-0 transform -translate-y-2'
          className={`bg-crust drop-shadow px-4 mb-4 pb-4 rounded-b-lg mx-auto md:rounded-b-lg md:p-2 md:my-0 md:flex md:justify-center md:w-1/2 md:row-start-1`}
        >
          <SearchBar />
        </Transition>
      </div>
      <div
        className={`mt-2 mb-16 overflow-y-scroll grid grid-cols-1 grid-flow-row place-content-center transition-all ease-in-out duration-300 md:flex md:flex-col md:my-0`}
      >
        <div className='md:flex md:flex-row'>
          <Transition
            show={Boolean(weatherData)}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='md:flex-auto'
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
            className='md:flex-auto'
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
          className='md:flex-1'
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
