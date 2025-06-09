import { Navbar } from "../../components/Navbar/Navbar";
import { Services } from "../../components/Services/Services";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-screen scroll-auto">
      <div className="flex h-screen w-screen bg-[url(/src/assets/landing_bg.png)] bg-cover bg-center items-end">
        <Navbar />
        <div className="flex flex-col px-30 py-8 gap-4">
          <div className="text-6xl leading-18 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipiscing.
          </div>
          <div className="flex items-center h-8 gap-2">
            <div className="bg-amber-300 h-full aspect-square rounded-full flex items-center justify-center font-bold">
              &gt;
            </div>
            <div className="text-lg font-bold">Get Started</div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}; 