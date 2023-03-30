import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WeatherProvider from './context/WeatherProvider';
import ErrorProvider from './context/ErrorProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ErrorProvider>
  </React.StrictMode>
);
