import { useState } from "react";
import { useServices } from "../../data/services";
import { Message } from "../../locales/LocaleHooks";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const Services = () => {
  const services = useServices();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-[#261501] flex flex-col items-center content-padding-x py-20 justify-between">
      <div className="py-7 gap-6 flex flex-col items-center text-center">
        <div className="text-3xl md:text-5xl font-bold">
          <Message id="services.title" />
        </div>
        <div className="w-fit text-2xl">
          <Message id="services.subtitle" />
        </div>
      </div>

      <div className="max-w-full h-auto min-h-130">
        <ServiceCard 
          service={services[activeServiceIndex]} 
          reverseOrder={(activeServiceIndex + 1) % 2 === 0} 
        />
      </div>

      <div className="flex h-auto w-full max-w-3xl items-center justify-around gap-6 md:gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="circle-icon text-4xl sm:text-5xl"
              data-active={activeServiceIndex === index}
              onClick={() => setActiveServiceIndex(index)}
            >
              <Icon className="h-8 w-8 sm:h-10 sm:w-10" fontSize="inherit" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
