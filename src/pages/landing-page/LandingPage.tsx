import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";
import ContactWithFooter from "./ContactWithFooter";

export const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-screen overflow-y-scroll overflow-x-hidden">
        <section className="h-screen">
          <Hero />
        </section>
        <section id="services-section">
          <Services />
        </section>
        <ContactWithFooter />
      </div>
    </div>
  );
};
