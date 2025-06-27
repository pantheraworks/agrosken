import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "LOREM IPSUM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros. Suspendisse at turpis sed lectus volutpat vestibulum et quis lacus. Sed efficitur lectus ac nulla hendrerit laoreet.",
    },
    {
      title: "LOREM IPSUM DOLOR SIT",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros. Suspendisse at turpis sed lectus volutpat vestibulum et quis lacus. Sed efficitur lectus ac nulla hendrerit laoreet.",
    },
    {
      title: "LOREM IPSUM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros. Suspendisse at turpis sed lectus volutpat vestibulum et quis lacus. Sed efficitur lectus ac nulla hendrerit laoreet. Curabitur ultrices, nulla a vulputate pharetra, tortor arcu efficitur ipsum, at elementum nisl tellus at nisl. Praesent quis augue a risus dapibus efficitur in at dolor. Pellentesque commodo id neque vitae scelerisque.",
    },
    {
      title: "LOREM IPSUM DOLOR SIT AMET",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque libero. Proin maximus tristique ante vel rhoncus. Nulla egestas magna sed ligula iaculis, at consequat libero tristique. Integer auctor a arcu eu congue. Morbi et tempus erat, sed tincidunt eros. Suspendisse at turpis sed lectus volutpat vestibulum et quis lacus. Sed efficitur lectus ac nulla hendrerit laoreet.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Privacy policy
        </motion.h1>

        <div className="space-y-12 max-w-6xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
