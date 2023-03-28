import { createContext } from "react";

type CityContexType = {
  city: string,
  setCity: (city: string) => void;
};

export const CityContext = createContext<CityContexType>({
  city: '',
  setCity: () => {},
});