import { useState } from "react";
import { NavLink } from "../NavLink";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import type { NavbarItem } from "./Navbar";

interface MobileNavbarProps {
  items: NavbarItem[];
}

export const MobileNavbar = ({ items }: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed pt-2 w-full navbar z-50 pb-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, #302424 0%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
        }}
      >
        <div className="flex w-full min-w-screen justify-between items-center border-b-1 py-2 px-3">
          <NavLink
            href={"/#hero-section"}
            className="text-3xl font-bold hover:text-amber-500"
          >
            AGROSKEN
          </NavLink>
          <Bars3CenterLeftIcon
            className="rotate-180 max-h-10 text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 h-screen w-screen bg-[#261501] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-between items-center py-11 px-3">
          <NavLink
            href={"/#hero-section"}
            className="text-3xl font-bold hover:text-amber-500"
          >
            AGROSKEN
          </NavLink>
          <XMarkIcon
            className="rotate-180 max-h-10 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-20 pt-6">
          {items.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-center text-3xl"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
