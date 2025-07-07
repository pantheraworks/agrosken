import { motion } from "framer-motion";
import { NavLink } from "../NavLink";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import aboutUsBgImg from "../../assets/about-us-bg.jpg";
import teamMember1Img from "../../assets/team-member-1.jpg";
import teamMember2Img from "../../assets/team-member-2.jpg";
import teamMember3Img from "../../assets/team-member-3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Lorem Ipsum",
    image: teamMember1Img,
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    image: teamMember2Img,
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    image: teamMember3Img,
  },
];

const coreValues = [
  {
    id: 1,
    title: "Quality",
    description: "Excellence in every service we provide",
    icon: ShieldCheckIcon,
    color: "text-amber-400",
  },
  {
    id: 2,
    title: "Innovation",
    description: "Cutting-edge agricultural solutions",
    icon: LightBulbIcon,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Partnership",
    description: "Growing together with our clients",
    icon: UsersIcon,
    color: "text-blue-400",
  },
];

const AboutUs = () => {
  return (
    <section className="relative min-h-screen">
      {/* Hero Background with Tractor Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={aboutUsBgImg}
            alt="Agricultural field with tractor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[var(--color-bg-primary)]" />
        </div>
      </div>

      {/* Transparent Navbar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 px-30"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        }}
      >
        <div className="flex w-full justify-between items-center pt-2 border-b-white/20 border-b-1 py-3">
          <NavLink
            href="/"
            className="text-3xl font-bold text-white hover:text-amber-500"
          >
            AGROSKEN
          </NavLink>
          <div className="flex h-min gap-6 text-white">
            <NavLink href="/#services-section" className="hover:text-amber-500">
              Services
            </NavLink>
            <NavLink href="/#about" className="hover:text-amber-500">
              About Us
            </NavLink>
            <NavLink href="/#contact-section" className="hover:text-amber-500">
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Title */}
        <div className="flex items-center justify-center h-[70vh]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold text-white"
          >
            About Us
          </motion.h1>
        </div>

        {/* Main Content */}
        <div className="bg-[var(--color-bg-primary)] text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg leading-relaxed text-amber-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  aliquet erat. Aliquam erat volutpat. Fusce quis scelerisque
                  libero. Proin maximus tristique ante vel rhoncus. Nulla
                  egestas magna sed ligula iaculis, at consequat libero
                  tristique. Integer auctor a arcu eu congue. Morbi et tempus
                  erat, sed tincidunt eros. Suspendisse at turpis sed lectus
                  volutpat vestibulum et quis lacus. Sed efficitur lectus ac
                  nulla hendrerit laoreet.
                </p>
              </motion.div>

              {/* Right Column - Core Values */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-8">Core values</h2>
                <div className="space-y-8">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      className="flex items-start space-x-4"
                    >
                      <div
                        className={`p-3 rounded-lg bg-white/10 ${value.color}`}
                      >
                        <value.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">
                          {value.title}
                        </h3>
                        <p className="text-amber-100/80 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[var(--color-bg-primary)] text-white pt-12 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-3xl font-semibold text-center mb-16"
            >
              Our team
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
