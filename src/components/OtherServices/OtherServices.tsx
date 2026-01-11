import { useState } from "react";
import { useOtherServices } from "../../data/otherServices";
import { Message } from "../../locales/LocaleHooks";
import { OtherServiceCard } from "../OtherServiceCard/OtherServiceCard";

export const OtherServices = () => {
  const services = useOtherServices();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isLastCardAlone = services.length % 2 === 1;
  const lastIndex = services.length - 1;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a0f05] to-[#261501] flex flex-col items-center content-padding-x py-20">
      {/* Header Section */}
      <div className="py-7 gap-6 flex flex-col items-center text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
          <Message id="otherServices.title" />
        </h2>
        <p className="w-fit text-xl md:text-2xl text-white/70">
          <Message id="otherServices.subtitle" />
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-5xl mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedCards.has(index);
            const isLastAlone = isLastCardAlone && index === lastIndex;

            return (
              <div
                key={service.id}
                className={`
                  ${isExpanded ? "self-stretch" : "self-start"}
                  ${isLastAlone ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto" : ""}
                `}
              >
                <OtherServiceCard
                  service={service}
                  isActive={isExpanded}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
