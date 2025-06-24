import { motion } from "framer-motion";
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#261501] text-white px-6 h-full">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Let's work
              <br />
              together.
            </h2>
            <p className="text-xl text-white mb-12">
              Feel free to ask anything.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6" />
                <a
                  href="tel:+12345678"
                  className="text-lg text-white hover:text-amber-500 transition-colors"
                  style={{ color: "white" }}
                >
                  +1 2 3456 789
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6" />
                <a
                  href="mailto:info@agrosken.com"
                  className="text-lg text-white hover:text-amber-500 transition-colors"
                  style={{ color: "white" }}
                >
                  info@agrosken.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6" />
                <span className="text-lg text-white">
                  1234 Lorem Ipsum, Dolor Sit.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-1">
                  Tell us about your interest
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-neutral-600 py-2 px-0 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  className="bg-neutral-700 text-white px-8 py-3 rounded-full hover:bg-neutral-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
