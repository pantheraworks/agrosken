import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-screen scroll-auto">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};
