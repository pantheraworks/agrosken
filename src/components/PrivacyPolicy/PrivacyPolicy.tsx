import { motion } from "framer-motion";

const PrivacyPolicy = () => {

  const czechSections = [
    {
      title: "1. Úvod",
      content: "Respektujeme vaše soukromí. Tyto Zásady ochrany osobních údajů vysvětlují, jak společnost Agrosken (\"my\", \"nás\", \"náš\") shromažďuje, používá a chrání vaše osobní údaje, když odešlete formulář na našich webových stránkách nebo využijete naše služby."
    },
    {
      title: "2. Informace, které shromažďujeme",
      content: (
        <>
          Následující osobní údaje shromažďujeme <strong>pouze</strong> při dobrovolném poskytnutí prostřednictvím našeho kontaktního/projektového formuláře:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Jméno</strong></li>
            <li><strong>E-mailová adresa</strong></li>
            <li><strong>Telefonní číslo</strong></li>
            <li><strong>Podrobnosti o projektu</strong> (popis, rozsah nebo jiné informace, které sdílíte)</li>
          </ul>
          <p className="mt-4">
            <strong>Neshromažďujeme</strong> žádné informace prostřednictvím cookies, analytických nástrojů, sledovacích pixelů nebo jiných pasivních metod.
          </p>
        </>
      )
    },
    {
      title: "3. Jak používáme vaše informace",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>K odpovědi na váš dotaz</strong> a následné komunikaci ohledně vašeho projektu.</li>
          <li><strong>K předávání důležitých aktualizací nebo objasnění</strong> týkajících se vašeho podání.</li>
          <li><strong>Neposíláme</strong> marketingové nebo propagační komunikace, pokud o to výslovně nepožádáte.</li>
        </ul>
      )
    },
    {
      title: "4. Sdílení údajů",
      content: (
        <>
          Vaše osobní údaje nikdy nesdílíme s třetími stranami, kromě případů kdy:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>To vyžaduje zákon</strong>, pro právní soulad nebo ochranu práv, nebo</li>
            <li><strong>Pro splnění služby</strong>, kterou jste výslovně požádali (např. předání vašeho projektu určenému spolupracovníkovi), s oznámením.</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Uchovávání údajů",
      content: "Vaše informace uchováváme pouze tak dlouho, jak je nezbytné pro zpracování vašeho podání a jakékoli následné komunikace. Pokud si přejete smazat své informace, kontaktujte nás (podrobnosti níže)."
    },
    {
      title: "6. Vaše práva",
      content: (
        <>
          Kdykoli můžete:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Požádat o přístup k vašim osobním údajům nebo jejich smazání.</li>
            <li>Požádat o opravu jakýchkoli nepřesností ve vašich údajích.</li>
          </ul>
          <p className="mt-4">
            Pro uplatnění těchto práv nás prosím kontaktujte pomocí níže uvedených informací.
          </p>
        </>
      )
    },
    {
      title: "7. Bezpečnost",
      content: "Implementujeme rozumná administrativní, technická a fyzická opatření k ochraně vašich osobních údajů. Žádný bezpečnostní systém však není zcela neproniknutelný."
    },
    {
      title: "8. Změny těchto zásad",
      content: "Tyto Zásady ochrany osobních údajů můžeme příležitostně aktualizovat. Jakékoli změny budou zveřejněny zde s novým \"Datem účinnosti\". Doporučujeme je pravidelně kontrolovat."
    },
    {
      title: "9. Kontaktujte nás",
      content: (
        <>
          Máte-li jakékoli otázky ohledně těchto zásad nebo vašich osobních údajů, kontaktujte nás na:
          <div className="mt-4 space-y-2">
            <p><strong>E-mail:</strong> <a href="mailto:kriz@agrosken.cz" className="text-blue-400 hover:text-blue-300 underline">kriz@agrosken.cz</a></p>
            <p><strong>Telefon:</strong> <a href="tel:+420773640132" className="text-blue-400 hover:text-blue-300 underline">+420 773 640 132</a></p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Czech Version (Primary) */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Zásady ochrany osobních údajů
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg mb-16"
        >
          <strong>Datum účinnosti:</strong> 4. září 2025
        </motion.p>

        <div className="space-y-12 max-w-4xl mb-20">
          {czechSections.map((section, index) => (
            <motion.div
              key={`cs-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                {section.title}
              </h2>
              <div className="text-gray-300 leading-relaxed text-lg">
                {typeof section.content === 'string' ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* English Version (Secondary) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-gray-700 pt-16"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-400 mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-sm mb-12">
            <strong>Effective Date:</strong> September 4, 2025
          </p>

          <div className="space-y-8 max-w-4xl text-sm">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((sectionNum, index) => {
              const getEnglishContent = (section: number) => {
                switch (section) {
                  case 1:
                    return "We respect your privacy. This Privacy Policy explains how Agrosken (\"we\", \"us\", \"our\") collects, uses, and protects your personal information when you submit a form on our website or interact with our services.";
                  case 2:
                    return (
                      <>
                        We collect the following personal information <strong>only</strong> when voluntarily provided via our contact/project submission form:
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                          <li><strong>Name</strong></li>
                          <li><strong>Email Address</strong></li>
                          <li><strong>Phone Number</strong></li>
                          <li><strong>Project Details</strong> (description, scope, or other information you share)</li>
                        </ul>
                        <p className="mt-4">
                          We do <strong>not</strong> collect any information via cookies, analytics tools, tracking pixels, or other passive methods.
                        </p>
                      </>
                    );
                  case 3:
                    return (
                      <ul className="list-disc ml-6 space-y-2">
                        <li>To respond to your inquiry and follow up about your project.</li>
                        <li>To communicate important updates or clarifications regarding your submission.</li>
                        <li>We do <strong>not</strong> send marketing or promotional communications, unless explicitly requested by you.</li>
                      </ul>
                    );
                  case 4:
                    return (
                      <>
                        We never share your personal information with third parties, unless:
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                          <li>Required by law, for legal compliance or protection of rights, or</li>
                          <li>To fulfill a service you've explicitly requested (e.g., forwarding your project to a specified collaborator), with notification.</li>
                        </ul>
                      </>
                    );
                  case 5:
                    return "We retain your information only as long as necessary to process your submission and any follow-up communications. If you'd like your information deleted, please contact us (details below).";
                  case 6:
                    return (
                      <>
                        You may, at any time:
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                          <li>Request access to or deletion of your personal information.</li>
                          <li>Request corrections to any inaccuracies in your data.</li>
                        </ul>
                        <p className="mt-4">
                          To exercise these rights, please contact us using the information below.
                        </p>
                      </>
                    );
                  case 7:
                    return "We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no security system is completely impenetrable.";
                  case 8:
                    return "We may update this Privacy Policy occasionally. Any changes will be posted here with a new \"Effective Date.\" We encourage you to review it periodically.";
                  case 9:
                    return (
                      <>
                        If you have any questions about this policy or your personal information, please contact us at:
                        <div className="mt-4 space-y-2">
                          <p><strong>Email:</strong> <a href="mailto:kriz@agrosken.cz" className="text-blue-400 hover:text-blue-300 underline">kriz@agrosken.cz</a></p>
                          <p><strong>Phone:</strong> <a href="tel:+420773640132" className="text-blue-400 hover:text-blue-300 underline">+420 773 640 132</a></p>
                        </div>
                      </>
                    );
                  default:
                    return "";
                }
              };

              const getEnglishTitle = (section: number) => {
                const titles = {
                  1: "1. Introduction",
                  2: "2. Information We Collect",
                  3: "3. How We Use Your Information",
                  4: "4. Data Sharing",
                  5: "5. Data Retention",
                  6: "6. Your Rights",
                  7: "7. Security",
                  8: "8. Changes to This Policy",
                  9: "9. Contact Us"
                };
                return titles[section as keyof typeof titles];
              };

              return (
                <div key={`en-${index}`}>
                  <h2 className="text-lg font-semibold text-gray-400 mb-4">
                    {getEnglishTitle(sectionNum)}
                  </h2>
                  <div className="text-gray-500 leading-relaxed">
                    {typeof getEnglishContent(sectionNum) === 'string' ? (
                      <p>{getEnglishContent(sectionNum)}</p>
                    ) : (
                      getEnglishContent(sectionNum)
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
