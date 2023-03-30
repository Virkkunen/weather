import React, { useState, useMemo } from 'react';
import { Props } from '../types/types';
import PreferencesContext from './PreferencesContext';

const PreferencesProvider: React.FC<Props> = ({ children }) => {
  const [prefs, setPrefs] = useState<any | null>(null);

  const value = useMemo(
    () => ({
      prefs,
      setPrefs,
    }),
    [prefs, setPrefs]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
