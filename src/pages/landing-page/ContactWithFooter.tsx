import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const ContactWithFooter = () => {
  return (
    <section id="contact-section" className="h-screen snap-start flex flex-col">
      {/* Contact takes up the available space */}
      <div className="flex-1">
        <Contact />
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </section>
  );
};

export default ContactWithFooter;
