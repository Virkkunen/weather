import { useState, useEffect } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const handleSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setCoordinates({ latitude, longitude });
    };

    const handleError = (err: GeolocationPositionError) => console.error(err);

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coordinates };
};
