import React, { useState, useMemo, useEffect } from 'react';
import { PrefsData, Props } from '../types/types';
import PreferencesContext from './PreferencesContext';

const PreferencesProvider: React.FC<Props> = ({ children }) => {
  const [prefs, setPrefs] = useState<PrefsData | null>(null);
  const [prefsOpen, setPrefsOpen] = useState(false);

  const getPreferences = () => {
    if (!localStorage.prefs) {
      const newPrefs = { units: 'metric', apiKey: '' };
      localStorage.setItem('prefs', JSON.stringify(newPrefs));
    }
    setPrefs(JSON.parse(localStorage.prefs));
  };

  useEffect(() => getPreferences(), []);

  const savePreferences = () =>
    localStorage.setItem('prefs', JSON.stringify(prefs));

  const value = useMemo(
    () => ({
      prefs,
      setPrefs,
      prefsOpen,
      setPrefsOpen,
      savePreferences,
    }),
    [prefs, setPrefs, prefsOpen, setPrefsOpen, savePreferences]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
