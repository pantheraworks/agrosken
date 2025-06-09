import { useState } from "react";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { services } from "../../data/services";

export const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService =
    services.find((service) => service.id === activeServiceId) || services[0];

  return (
    <div className="min-w-screen min-h-screen bg-[#261501] flex flex-col items-center px-20 py-20 justify-between">
      <div className="py-7 gap-6 flex flex-col items-center text-center">
        <div className="text-5xl font-bold">
          Smart Solutions for Smarter Farming
        </div>
        <div className="w-fit text-2xl">See what we offer:</div>
      </div>
      <ServiceCard
        icon={activeService.icon}
        title={activeService.title}
        description={activeService.description}
        imageSrc={activeService.imageSrc}
        imageAlt={activeService.imageAlt}
      />
      <div className="flex h-25 w-full px-50 items-center justify-around text-3xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="circle-icon"
            data-active={activeServiceId === service.id}
            onClick={() => setActiveServiceId(service.id)}
          >
            {service.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
