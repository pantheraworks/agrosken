import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen overflow-y-scroll">
        <section className="h-screen">
          <Hero />
        </section>
        <section className="h-screen">
          <Services />
        </section>
      </div>
    </div>
  );
};
