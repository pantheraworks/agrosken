import { createContext } from "react";
import type { LocaleContextState } from "../../providers/LocaleProvider";

export const LocaleContext = createContext<LocaleContextState | undefined>(
  undefined
);
