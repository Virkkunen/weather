import { useState, useEffect, useContext } from "react";
import WeatherContext from "../context/WeatherContext";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const handleSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setCoordinates({ latitude, longitude });
      setError(null);
    };

    const handleError = (err: GeolocationPositionError) => {
      console.error(err.message);
      setError(err);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coordinates, error, setError };
};
