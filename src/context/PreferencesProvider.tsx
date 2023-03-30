import React, { useState, useMemo, useEffect } from 'react';
import { PrefsData, Props } from '../types/types';
import PreferencesContext from './PreferencesContext';

const PreferencesProvider: React.FC<Props> = ({ children }) => {
  const [prefs, setPrefs] = useState<PrefsData | null>(null);

  const getPreferences = () => {
    if (!localStorage.prefs) return;
    setPrefs(JSON.parse(localStorage.prefs));
  };

  useEffect(() => getPreferences(), []);

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
