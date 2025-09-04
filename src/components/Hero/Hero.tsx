import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Message, useMessage } from "../../locales/LocaleHooks";
import { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const title = useMessage("landing.hero.title");
  const getStartedText = useMessage("landing.hero.getStarted");
  const textRef = useRef<HTMLDivElement>(null);
  const [chevronAnimationOffset, setChevronAnimationOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.getBoundingClientRect().width;
      setChevronAnimationOffset(width + 12);
    }
  }, [getStartedText]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero-section"
      className="flex h-screen w-full bg-[var(--color-bg-primary)] items-end relative z-10 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[url(/src/assets/landing-bg.jpg)] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="flex flex-col content-padding-x py-8 gap-4 relative z-10">
        <div key={title} className="text-6xl leading-18 max-w-3xl">
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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.0,
            duration: 0.8,
            ease: "easeOut",
          }}
          onClick={scrollToServices}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 -left-2 -right-2 bg-[var(--color-primary-amber)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div 
            className="relative bg-[var(--color-primary-amber)] h-full aspect-square rounded-full flex items-center justify-center font-bold transition-all duration-500 group-hover:bg-transparent z-10"
            style={{
              transform: isHovered ? `translateX(${chevronAnimationOffset}px)` : 'translateX(0px)',
            }}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </div>
          <div 
            ref={textRef}
            className="relative text-lg font-bold transition-all duration-500 group-hover:-translate-x-8 z-10"
          >
            <Message id="landing.hero.getStarted" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
