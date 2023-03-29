import { useContext } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData } = useContext(WeatherContext);
  return (
    <div className='grid grid-cols-1 grid-rows-1 grid-flow-row place-content-center ease-in-out duration-200'>
      {isLoading && <Loading />}
      <Header />
      {weatherData && <WeatherDisplay />}
      <Footer />
    </div>
  );
}

export default App;
