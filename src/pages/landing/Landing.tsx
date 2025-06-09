import service1 from "../../assets/service_1.png";

export const Landing = () => {
  return (
    <div className="flex flex-col w-screen scroll-auto">
      <div className="flex h-screen w-screen bg-[url(/src/assets/landing_bg.png)] bg-cover bg-center items-end">
        <div
          className="fixed top-0 w-full px-30 navbar"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
        >
          <div className=" flex w-full justify-between items-center pt-2 border-b-orange-50 border-b-1 py-3">
            <div className="text-3xl font-bold">AGROSKEN</div>
            <div className="flex h-min gap-6">
              <div>Services</div>
              <div>About Us</div>
              <div>Contact</div>
            </div>
          </div>
        </div>
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

const Services = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#261501] flex flex-col items-center px-20 py-20 justify-between">
      <div className="py-7 gap-6 flex flex-col items-center text-center">
        <div className="text-5xl font-bold">
          Smart Solutions for Smarter Farming
        </div>
        <div className="w-fit text-2xl">See what we offer:</div>
      </div>
      <div className="flex w-full gap-20 items-stretch px-30">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex h-10 gap-4 items-center">
            <div className="circle-icon">A</div>
            <div className="text-3xl font-bold">Lorem ipsum</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            scelerisque erat vitae tincidunt varius. Donec commodo consequat
            mollis. Maecenas efficitur mi quis velit tristique ultricies. Nam
            blandit eros arcu, at dictum ligula eleifend id. Nullam semper
            sollicitudin massa nec dapibus. Sed rutrum vulputate commodo.
          </div>
        </div>

        <div className="relative">
          <img
            src={service1}
            className="h-full w-auto rounded-3xl object-cover"
            alt="Service"
          />
        </div>
      </div>
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
