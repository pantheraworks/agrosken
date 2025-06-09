import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen overflow-y-scroll scroll-snap-y-mandatory">
        <section className="h-screen scroll-snap-align-start">
          <Hero />
        </section>
        <section className="h-screen scroll-snap-align-start">
          <Services />
        </section>
      </div>
    </div>
  );
};
