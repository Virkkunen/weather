import { useContext } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherContext from './context/WeatherContext';

function App() {
  const { isLoading, weatherData } = useContext(WeatherContext);
  return (
    <>
      {isLoading && <Loading />}
      <Header />
      {weatherData && <WeatherDisplay />}
    </>
  );
}

export default App;
