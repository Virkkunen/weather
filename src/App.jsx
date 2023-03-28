import Header from './components/Header';
import WeatherProvider from './context/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <div className='flex'>
        <Header />
      </div>
    </WeatherProvider>
  );
}

export default App;
