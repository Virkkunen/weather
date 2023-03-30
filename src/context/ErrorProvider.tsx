import React, { useState, useMemo } from 'react';
import { ErrorData, Props } from '../types/types';
import ErrorContext from './ErrorContext';

const ErrorProvider: React.FC<Props> = ({ children }) => {
  const [error, setError] = useState<any | null>(null);

  const errorMap: ErrorData = {
    1: 'User denied geolocation prompt.',
    400: 'City not found.',
    404: 'City not found.',
  };

  const value = useMemo(
    () => ({
      error,
      setError,
      errorMap,
    }),
    [error, setError, errorMap]
  );

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export default ErrorProvider;
