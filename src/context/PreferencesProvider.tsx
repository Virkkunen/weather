import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { PrefsData, Props } from '../types/types';
import PreferencesContext from './PreferencesContext';

const PreferencesProvider: React.FC<Props> = ({ children }) => {
  const [prefs, setPrefs] = useState<PrefsData | null>(null);
  const [prefsOpen, setPrefsOpen] = useState(false);

  const getPreferences = useCallback(() => {
    if (!localStorage.prefs) {
      const newPrefs = { units: 'metric', apiKey: '' };
      localStorage.setItem('prefs', JSON.stringify(newPrefs));
    }
    setPrefs(JSON.parse(localStorage.prefs));
  }, [setPrefs]);

  useEffect(() => getPreferences(), []);

  const savePreferences = useCallback(() =>
    localStorage.setItem('prefs', JSON.stringify(prefs)), [prefs]);

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
