import { type ComponentType } from "react";

interface ServiceCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt = "Service",
}: ServiceCardProps) => {
  return (
    <div className="flex w-full gap-20 items-stretch px-30">
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex h-10 gap-4 items-center">
          <Icon className="h-10 w-10" />
          <div className="text-3xl font-bold">{title}</div>
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
