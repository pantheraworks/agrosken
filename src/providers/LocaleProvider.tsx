import type { LocaleMessages } from "../locales/LocaleTypes";
import { IntlProvider } from "react-intl";
import en from "../locales/en.json";
import cs from "../locales/cs.json";
import { useState, type ReactNode } from "react";
import { LocaleContext } from "../components/contexts/LocaleContext";

const LOCAL_STORAGE_KEY = "locale";

type Locale = "en-US" | "cs-CZ";

interface LocaleProviderProps {
  children: ReactNode;
}

export interface LocaleContextState {
  locale: string;
  setLocale: (locale: Locale) => void;
}

const messages: Record<Locale, LocaleMessages> = {
  "en-US": en,
  "cs-CZ": cs,
};

const defaultLocale = "cs";

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(
    (localStorage.getItem(LOCAL_STORAGE_KEY) as Locale) || defaultLocale
  );

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem(LOCAL_STORAGE_KEY, newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={defaultLocale}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
