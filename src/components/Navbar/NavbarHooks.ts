import { useMemo } from "react";
import { useMessage } from "../../locales/LocaleHooks";
import type { NavbarItem } from "./Navbar";

export const useNavbarItems = (): NavbarItem[] => {
  const servicesLabel = useMessage("navbar.services");
  const contactLabel = useMessage("navbar.contact");
  const privacyPolicyLabel = useMessage("footer.privacyPolicy");
  const faqLabel = useMessage("footer.faq");

  return useMemo(
    () => [
      {
        href: "/#services-section",
        label: servicesLabel,
      },
      {
        href: "/#contact-section",
        label: contactLabel,
      },
      {
        href: "/faq",
        label: faqLabel,
      },
    ],
    [servicesLabel, contactLabel]
  );
};
