import { useIsMobile } from "../../providers/MobileProvider";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { useNavbarItems } from "./NavbarHooks";

export interface NavbarItem {
  href: string;
  label: string;
}

export const Navbar = () => {
  const isMobile = useIsMobile();
  const navbarItems = useNavbarItems();

  return isMobile ? (
    <MobileNavbar items={navbarItems} />
  ) : (
    <DesktopNavbar items={navbarItems} />
  );
};
