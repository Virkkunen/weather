import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const ErrorBox = () => {
  const { error } = useContext(WeatherContext);

  interface ErrorMap {
    [key: string]: string;
  }

  const errorMap: ErrorMap = {
    1: `${error.message}. Please manually select a location.`,
    404: `City not found.`,
  };

  return (
    <div className='m-4 p-8 rounded-lg bg-surface0 flex flex-col place-content-center drop-shadow hover:drop-shadow-lg'>
      <span>{errorMap[error.code]}</span>
    </div>
  )
}

export default ErrorBox