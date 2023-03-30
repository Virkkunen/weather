import { createContext } from "react";
import { ErrorContextType, ErrorData } from "../types/types";

const ErrorContext = createContext<ErrorContextType>({
  error: null,
  setError: (error: any | null) => {},
  errorMap: {},
});

export default ErrorContext;