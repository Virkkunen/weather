import { useContext } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import WeatherContext from './context/WeatherContext';
import WeatherProvider from './context/WeatherProvider';

function App() {
  const { isLoading, weatherData } = useContext(WeatherContext);
  return (
    <WeatherProvider>
      {isLoading && <Loading />}
      <Header />
    </WeatherProvider>
  );
}

export default App;
