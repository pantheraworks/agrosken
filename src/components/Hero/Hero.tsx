import { motion } from "framer-motion";

export const Hero = () => {
  const title = "Lorem ipsum dolor sit amet consectetur adipiscing.";

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
        <div className="flex items-center h-8 gap-2">
          <div className="bg-amber-300 h-full aspect-square rounded-full flex items-center justify-center font-bold">
            &gt;
          </div>
          <div className="text-lg font-bold">Get Started</div>
        </div>
      </div>
    </div>
  );
};
