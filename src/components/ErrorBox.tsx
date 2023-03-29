import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const ErrorBox = () => {
  const { error, setError } = useContext(WeatherContext);

  interface ErrorMap {
    [key: string]: string;
  }

  const errorMap: ErrorMap = {
    1: `User denied location prompt. Please manually select a location.`,
    404: `City not found.`,
  };

  const handleClick = () => setError(null);

  return (
    <div className='m-4 p-8 rounded-lg bg-surface0 flex flex-col place-content-center drop-shadow hover:drop-shadow-lg relative ease-in-out duration-200'>
      <span>{error && errorMap[error.code]}</span>
      <button
        type='button'
        className='font-bold text-maroon mt-4 hover:text-red active:text-opacity-60 ease-in-out duration-200'
        onClick={handleClick}
      >
        Close
      </button>
    </div>
  );
};

export default ErrorBox;
