import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherProvider from './context/WeatherProvider';
import ErrorProvider from './context/ErrorProvider';
import './index.css';
import PreferencesProvider from './context/PreferencesProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorProvider>
      <PreferencesProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </PreferencesProvider>
    </ErrorProvider>
  </React.StrictMode>
);
