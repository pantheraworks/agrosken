import { NavLink } from "../NavLink";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
        <NavLink
          href={isHomePage ? "#hero-section" : "/"}
          className="text-3xl font-bold hover:text-amber-500"
        >
          AGROSKEN
        </NavLink>
        <div className="flex h-min gap-6">
          <NavLink
            href={isHomePage ? "#services-section" : "/#services-section"}
            className="hover:text-amber-500"
          >
            Services
          </NavLink>
          <NavLink
            href="/about-us"
            className="hover:text-amber-500"
          >
            About Us
          </NavLink>
          <NavLink
            href={isHomePage ? "#contact-section" : "/#contact-section"}
            className="hover:text-amber-500"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
