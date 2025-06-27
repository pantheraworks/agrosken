import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        {isHomePage ? (
          <a
            href="#hero-section"
            onClick={(e) => handleNavClick(e, "hero-section")}
            className="text-3xl font-bold text-white hover:text-amber-500 transition-colors cursor-pointer"
            style={{ color: "white" }}
          >
            AGROSKEN
          </a>
        ) : (
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:text-amber-500 transition-colors cursor-pointer"
            style={{ color: "white" }}
          >
            AGROSKEN
          </Link>
        )}
        <div className="flex h-min gap-6">
          {isHomePage ? (
            <>
              <a
                href="#services-section"
                onClick={(e) => handleNavClick(e, "services-section")}
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                About Us
              </a>
              <a
                href="#contact-section"
                onClick={(e) => handleNavClick(e, "contact-section")}
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#services-section"
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                Services
              </Link>
              <Link
                to="/#about"
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                About Us
              </Link>
              <Link
                to="/#contact-section"
                className="text-white hover:text-amber-500 transition-colors cursor-pointer"
                style={{ color: "white" }}
              >
                Contact
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
