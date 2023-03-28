import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import { CityProvider } from './context/CityProvider';

function App() {
  return (
    <CityProvider>
      <div>
        <Header />
        <Weather />
      </div>
    </CityProvider>
  );
}

export default App;
