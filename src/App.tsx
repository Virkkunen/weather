import { Transition } from '@headlessui/react';
import { useContext } from 'react';
import ErrorBox from './components/ErrorBox';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import SkeletonDisplay from './components/SkeletonDisplay';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData, error, searchLoading } =
    useContext(WeatherContext);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <ErrorBox />
      <div className='grid grid-cols-1 grid-flow-row place-content-center transition-all ease-in-out duration-300 md:flex md:flex-1 md:justify-center md:flex-wrap'>
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
      </div>
      <Footer />
    </>
  );
}

export default App;
