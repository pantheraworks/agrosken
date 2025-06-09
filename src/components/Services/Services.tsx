import service1 from "../../assets/service_1.png";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export const Services = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#261501] flex flex-col items-center px-20 py-20 justify-between">
      <div className="py-7 gap-6 flex flex-col items-center text-center">
        <div className="text-5xl font-bold">
          Smart Solutions for Smarter Farming
        </div>
        <div className="w-fit text-2xl">See what we offer:</div>
      </div>
      <ServiceCard
        icon="A"
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque erat vitae tincidunt varius. Donec commodo consequat mollis. Maecenas efficitur mi quis velit tristique ultricies. Nam blandit eros arcu, at dictum ligula eleifend id. Nullam semper sollicitudin massa nec dapibus. Sed rutrum vulputate commodo."
        imageSrc={service1}
      />
      <div className="flex h-25 w-full px-50 items-center justify-around text-3xl">
        <div className="circle-icon">A</div>
        <div className="circle-icon">B</div>
        <div className="circle-icon">C</div>
        <div className="circle-icon">D</div>
        <div className="circle-icon">E</div>
      </div>
    </div>
  );
}; 