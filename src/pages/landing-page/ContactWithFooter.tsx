import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const ContactWithFooter = () => {
  return (
    <section id="contact-section" className="h-screen snap-start flex flex-col">
      <div className="flex-1">
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default ContactWithFooter;
