import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service: {
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt = "Service" },
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-6 sm:gap-20 items-stretch sm:px-32 px-4">
      <div className="flex flex-col gap-4 sm:gap-8 flex-1 min-w-40">
        <div className="flex h-10 gap-4 items-center">
          <Icon className="h-10 w-10" />
          <div className="text-2xl font-bold">{title}</div>
        </div>
        <div>{description}</div>
      </div>

      <div className="relative">
        <img
          src={imageSrc}
          className="h-full w-auto rounded-3xl object-cover"
          alt={imageAlt}
        />
      </div>
    </div>
  );
};
