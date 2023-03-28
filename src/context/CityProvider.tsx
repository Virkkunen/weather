import { useState } from "react";
import { CityContext } from "./CityContext";

type CityProviderProps = {
  children: React.ReactNode;
};

export const CityProvider = ({ children }: CityProviderProps) => {
  const [ city, setCity ] = useState('Default');
  
  return (
    <CityContext.Provider value={{ city, setCity }}>
      { children }
    </CityContext.Provider>
  );
};