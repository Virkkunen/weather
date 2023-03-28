import { useContext } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData } = useContext(WeatherContext);
  return (
    <div className='grid grid-cols-1 grid-rows-1 grid-flow-row'>
      {isLoading && <Loading />}
      <Header />
      {weatherData && <WeatherDisplay />}
    </div>
  );
}

export default App;
