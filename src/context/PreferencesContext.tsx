import { createContext } from "react";
import { PreferencesContextType } from "../types/types";

const PreferencesContext = createContext<PreferencesContextType>({
  prefs: null,
  setPrefs: (prefs: any | null) => {},
});

export default PreferencesContext;