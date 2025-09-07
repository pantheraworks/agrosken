import { NavLink } from "../NavLink";
import { useMessage } from "../../locales/LocaleHooks";

const Footer = () => {
  const companyLabel = useMessage("footer.company");
  // const resourcesLabel = useMessage("footer.resources");
  const contactLabel = useMessage("footer.contact");
  const privacyPolicyLabel = useMessage("footer.privacyPolicy");
  // const faqLabel = useMessage("footer.faq");
  const copyrightLabel = useMessage("footer.copyright");

  // TODO: Implement social links section
  // const socialLinks = [
  //   { name: "X", href: "#", icon: "𝕏" },
  //   { name: "YouTube", href: "#", icon: "▶" },
  //   { name: "LinkedIn", href: "#", icon: "in" },
  // ];

  const companyLinks = [
    { name: contactLabel, href: "#contact-section" },
    { name: privacyPolicyLabel, href: "/privacy-policy" },
  ];

  // const resourcesLinks = [
  //   { name: faqLabel, href: "/faq" },
  // ];

  return (
    <footer className="bg-[var(--color-footer-amber)] text-white py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold">AGROSKEN</h2>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            {/* Company Section */}
            <div>
              <h3 className="text-base font-semibold mb-2">{companyLabel}</h3>
              <ul className="space-y-1 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink href={link.href} className="hover:text-amber-200">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* 
            Resources Section
            <div>
              <h3 className="text-base font-semibold mb-2">{resourcesLabel}</h3>
              <ul className="space-y-1 text-sm">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink href={link.href} className="hover:text-amber-200">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-[var(--color-footer-amber-dark)] text-center text-sm">
          <p>
            © {new Date().getFullYear()} Agrosken. {copyrightLabel}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
