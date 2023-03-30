import { useState, useEffect, useContext } from "react";
import WeatherContext from "../context/WeatherContext";

export const useGeolocation = () => {
  const [error, setError] = useState<any | null>(null);
  const { setQuery } = useContext(WeatherContext);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const handleSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      const lat = latitude.toFixed(2);
      const lon = longitude.toFixed(2);
      const queryCoords = `${lat},${lon}`;
      setQuery(queryCoords);
      setError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      console.error(err.message);
      setError(err);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { error, setError };
};
