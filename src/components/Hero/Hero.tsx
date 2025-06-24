import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const Hero = () => {
  const title = "Lorem ipsum dolor sit amet consectetur adipiscing.";

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
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
          className="inline-flex items-center h-8 gap-2 cursor-pointer group relative w-fit"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.0,
            duration: 0.8,
            ease: "easeOut",
          }}
          onClick={scrollToServices}
        >
          <div className="absolute inset-0 -left-2 -right-2 bg-[var(--color-primary-amber)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-[var(--color-primary-amber)] h-full aspect-square rounded-full flex items-center justify-center font-bold transition-all duration-500 group-hover:translate-x-[110px] group-hover:bg-transparent z-10">
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div className="relative text-lg font-bold transition-all duration-500 group-hover:-translate-x-8 z-10">
            Get Started
          </div>
        </motion.div>
      </div>
    </div>
  );
};
