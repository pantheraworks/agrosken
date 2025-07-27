import { useMemo } from "react";
import { useMessage } from "../../locales/LocaleHooks";
import type { NavbarItem } from "./Navbar";

export const useNavbarItems = (): NavbarItem[] => {
  const servicesLabel = useMessage("navbar.services");
  const aboutLabel = useMessage("navbar.about");
  const contactLabel = useMessage("navbar.contact");

  return useMemo(
    () => [
      {
        href: "/#services-section",
        label: servicesLabel,
      },
      {
        href: "/about-us",
        label: aboutLabel,
      },
      {
        href: "/#contact-section",
        label: contactLabel,
      },
    ],
    [servicesLabel, aboutLabel, contactLabel]
  );
};
