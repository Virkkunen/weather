import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import ErrorBox from './components/ErrorBox';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import { SearchBar } from './components/SearchBar';
import SkeletonDisplay from './components/SkeletonDisplay';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData, error, searchLoading, searchDisplay } =
    useContext(WeatherContext);
  return (
    <div className='md:grid md:grid-cols-1 md:grid-rows-3 md:items-center md:h-screen md:max-w-4xl md:mx-auto'>
      {isLoading && <Loading />}
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
      <div className='grid grid-cols-1 grid-flow-row place-content-center transition-all ease-in-out duration-300 md:flex md:flex-row md:justify-between md:gap-12 md:row-start-2'>
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
          {weatherData && !searchLoading && <SkeletonDisplay />}
          {searchLoading && <SkeletonDisplay />}
        </Transition>
      </div>
      <Footer />
    </div>
  );
}

export default App;
