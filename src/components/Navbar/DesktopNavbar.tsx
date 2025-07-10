import { NavLink } from "../NavLink";
import type { NavbarItem } from "./Navbar";

interface DesktopNavbarProps {
  items: NavbarItem[];
}

export const DesktopNavbar = ({ items }: DesktopNavbarProps) => {
  return (
    <div
      className="fixed top-0 w-full px-30 navbar z-50"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
      }}
    >
      <div className=" flex w-full justify-between items-center pt-2 border-b-orange-50 border-b-1 py-3">
        <NavLink href={"/#hero-section"} className="text-3xl font-bold hover:text-amber-500">
          AGROSKEN
        </NavLink>
        <div className="flex h-min gap-6">
          {items.map(({ href, label }) => (
            <NavLink key={href} href={href} className="hover:text-amber-500">
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
