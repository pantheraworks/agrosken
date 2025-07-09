import { useIsMobile } from "../../providers/MobileProvider";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavBar";

export interface NavbarItem {
  href: string;
  label: string;
}

export const NavbarItems: NavbarItem[] = [
  {
    href: "/#services-section",
    label: "Services",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/#contact-section",
    label: "Contact",
  },
];

export const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileNavbar items={NavbarItems} />
  ) : (
    <DesktopNavbar items={NavbarItems} />
  );
};
