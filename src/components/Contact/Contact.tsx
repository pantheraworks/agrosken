import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useMessage } from "../../locales/LocaleHooks";
import { ContactForm } from "../ContactForm/ContactForm";

const Contact = () => {
  const address = useMessage("contact.address");
  const title = useMessage("contact.title");
  const subtitle = useMessage("contact.subtitle");

  return (
    <section className="bg-[#261501] text-white h-full overflow-x-hidden">
      <div className="content-padding-x h-full flex items-center py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-white mb-12">{subtitle}</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6" />
                <a
                  href="tel:+420773640132"
                  className="text-lg text-white hover:text-amber-500 transition-colors"
                  style={{ color: "white" }}
                >
                  +420 773 640 132
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6" />
                <a
                  href="mailto:info@agrosken.com"
                  className="text-lg text-white hover:text-amber-500 transition-colors"
                  style={{ color: "white" }}
                >
                  kriz@agrosken.cz
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6" />
                <span className="text-lg text-white">{address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
