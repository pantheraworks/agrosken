import { Carousel } from "react-responsive-carousel";
import { useServices } from "../../data/services";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ServiceCarouselProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

export const ServiceCarousel = ({
  activeIndex,
  onChange,
}: ServiceCarouselProps) => {
  const services = useServices();
  return (
    <div className="max-w-full">
      <Carousel
        selectedItem={activeIndex}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        onChange={onChange}
        emulateTouch
      >
        {services.map((service, index) => (
          <ServiceCard service={service} reverseOrder={(index + 1) % 2 === 0} />
        ))}
      </Carousel>
    </div>
  );
};
