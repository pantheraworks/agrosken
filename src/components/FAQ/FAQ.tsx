import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Heading */}
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Any questions?
              <br />
              We got you.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 text-lg"
            >
              Check out the answers to our
              <br />
              most frequently asked questions.
            </motion.p>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-600"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-3 text-left !bg-transparent hover:!bg-white/5 transition-colors !border-none !rounded-none !p-0 !py-3"
                >
                  <span className="text-white">{item.question}</span>
                  <span className="text-white text-2xl flex-shrink-0 ml-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 pb-4">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
