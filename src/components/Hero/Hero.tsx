import { motion } from "framer-motion";

export const Hero = () => {
  const title = "Lorem ipsum dolor sit amet consectetur adipiscing.";

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#261501] items-end relative z-10">
      <motion.div
        className="absolute inset-0 bg-[url(/src/assets/landing_bg.png)] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex flex-col px-30 py-8 gap-4 relative z-10">
        <div className="text-6xl leading-18 max-w-3xl">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5 + index * 0.03, // Start after 0.5s, then 30ms per character
                duration: 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="flex items-center justify-between h-8 min-w-[150px] gap-2 cursor-pointer group relative overflow-hidden rounded-full transition-all duration-300 hover:bg-amber-300 hover:px-3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.0,
            duration: 0.8,
            ease: "easeOut",
          }}
          onClick={scrollToServices}
        >
          <div className="bg-amber-300 h-full aspect-square rounded-full flex items-center justify-center font-bold transition-all duration-500 absolute left-0 group-hover:left-[calc(100%-2rem)] group-hover:bg-transparent z-10">
            &gt;
          </div>
          <div className="text-lg font-bold transition-all duration-500 pl-10 group-hover:pl-3 group-hover:text-black">Get Started</div>
        </motion.div>
      </div>
    </div>
  );
};
