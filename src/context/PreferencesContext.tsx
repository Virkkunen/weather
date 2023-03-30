import { createContext } from "react";
import { PreferencesContextType, PrefsData } from "../types/types";

const PreferencesContext = createContext<PreferencesContextType>({
  prefs: null,
  setPrefs: (prefs: PrefsData | null) => {},
});

export default PreferencesContext;