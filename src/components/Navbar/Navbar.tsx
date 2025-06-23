export const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full px-30 navbar z-50"
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
  );
};
