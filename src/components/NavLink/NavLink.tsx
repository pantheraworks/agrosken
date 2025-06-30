import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const baseClasses = "text-white transition-colors cursor-pointer";
  const combinedClasses = `${baseClasses} ${className}`;

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      navigate("/" + href);
    }
  };

  // Handle internal navigation links (starting with /)
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        className={combinedClasses}
        style={{ color: "white" }}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  // Handle hash links (starting with #)
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={handleHashLinkClick}
        className={combinedClasses}
        style={{ color: "white" }}
      >
        {children}
      </a>
    );
  }

  // Handle external links
  return (
    <a
      href={href}
      className={combinedClasses}
      style={{ color: "white" }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
};
