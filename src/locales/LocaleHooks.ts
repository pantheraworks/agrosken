import { useContext, type ReactNode } from "react";
import { type LocaleContextState } from "../providers/LocaleProvider";
import { LocaleContext } from "../components/contexts/LocaleContext";
import type { LocaleMessageKeys } from "./LocaleTypes";
import { useIntl } from "react-intl";

export interface MessageProps {
  id: LocaleMessageKeys;
  values?: Record<string, string | number>;
}

export const useLocale = (): LocaleContextState => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
};

export const useMessage = (
  id: LocaleMessageKeys,
  values?: Record<string, string | number>
): string => {
  const intl = useIntl();

  return intl.formatMessage({ id }, values);
};

export const Message = ({ id, values }: MessageProps): ReactNode => {
  const intl = useIntl();

  return intl.formatMessage({ id }, values);
};
