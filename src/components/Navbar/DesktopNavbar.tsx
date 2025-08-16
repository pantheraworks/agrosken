import { useLocale } from "../../locales/LocaleHooks";
import { NavLink } from "../NavLink";
import type { NavbarItem } from "./Navbar";

interface DesktopNavbarProps {
  items: NavbarItem[];
}

export const DesktopNavbar = ({ items }: DesktopNavbarProps) => {
  const { setLocale, locale } = useLocale();

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
      <div className="flex w-full justify-between items-center border-b-orange-50 border-b-1 py-3">
        <NavLink
          href={"/#hero-section"}
          className="text-3xl font-bold hover:text-amber-500"
        >
          AGROSKEN
        </NavLink>
        <div className="flex h-min gap-6">
          {items.map(({ href, label }) => (
            <NavLink key={href} href={href} className="hover:text-amber-500">
              {label}
            </NavLink>
          ))}
          <div className="grid grid-cols-2 divide-x-1 divide-amber-50">
            <div
              className={`text-2xl px-2 cursor-pointer select-none ${locale === "cs-CZ" && "underline"}`}
              onClick={() => setLocale("cs-CZ")}
            >
              🇨🇿
            </div>
            <div
              className={`text-2xl px-2 cursor-pointer select-none ${locale === "en-US" && "underline"}`}
              onClick={() => setLocale("en-US")}
            >
              🇬🇧
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
