import { useState } from "react";
import { useServices } from "../../data/services";
import { Message } from "../../locales/LocaleHooks";
import { ServiceCarousel } from "./ServiceCarousel";

export const Services = () => {
  const services = useServices();

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const handleCarouselChange = (index: number) => setActiveServiceIndex(index);

  return (
    <div className="w-screen min-h-screen bg-[#261501] flex flex-col items-center content-padding-x py-20 justify-between">
      <div className="py-7 gap-6 flex flex-col items-center text-center">
        <div className="text-3xl md:text-5xl font-bold">
          <Message id="services.title" />
        </div>
        <div className="w-fit text-2xl">
          <Message id="services.subtitle" />
        </div>
      </div>

      <ServiceCarousel
        activeIndex={activeServiceIndex}
        onChange={handleCarouselChange}
      />

      <div className="flex flex-wrap h-auto w-full items-center justify-around gap-6 md:gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="circle-icon"
              data-active={activeServiceIndex === index}
              onClick={() => setActiveServiceIndex(index)}
            >
              <Icon className="h-12 w-12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
