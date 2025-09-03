import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  reverseOrder?: boolean;
}

export const ServiceCard = ({
  service: { icon: Icon, title, description, imageSrc },
  reverseOrder = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`flex ${reverseOrder ? "flex-row-reverse" : "flex-row"} w-full gap-8 lg:gap-20 items-stretch justify-center flex-wrap py-4 px-2 select-none`}
    >
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex min-h-10 h-auto gap-4 items-center text-5xl">
          <Icon className="h-10 w-10 min-w-10" fontSize="inherit"/>
          <div className="text-xl md:text-3xl font-bold">{title}</div>
        </div>
        <div className="text-justify">{description}</div>
      </div>

      <div className="">
        <img
          src={imageSrc}
          className="rounded-3xl object-cover h-fit w-auto max-h-60"
          alt={title}
        />
      </div>
    </div>
  );
};
