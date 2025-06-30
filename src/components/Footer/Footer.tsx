import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleHashLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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

  const socialLinks = [
    { name: "X", href: "#", icon: "𝕏" },
    { name: "YouTube", href: "#", icon: "▶" },
    { name: "LinkedIn", href: "#", icon: "in" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact-section" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Support", href: "#support" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-[var(--color-footer-amber)] text-white py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold">AGROSKEN</h2>
          </div>

          {/* Links Sections */}
          <div className="flex gap-12">
            {/* Company Section */}
            <div>
              <h3 className="text-base font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-white hover:text-amber-200 transition-colors"
                        style={{ color: "white" }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href)}
                        className="text-white hover:text-amber-200 transition-colors cursor-pointer"
                        style={{ color: "white" }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-base font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-sm">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-white hover:text-amber-200 transition-colors"
                        style={{ color: "white" }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleHashLinkClick(e, link.href)}
                        className="text-white hover:text-amber-200 transition-colors cursor-pointer"
                        style={{ color: "white" }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-[var(--color-footer-amber-dark)] text-center text-sm">
          <p>© {new Date().getFullYear()} Agrosken. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
