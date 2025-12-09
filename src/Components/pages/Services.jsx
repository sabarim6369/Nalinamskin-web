import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingMedical,
  FaCut,
  FaStethoscope,
  FaSpa,
  FaUserMd,
  FaFlask,
  FaMicroscope,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";
import HeroSection from "../ui/HeroSection";

// Using public assets for hero background
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/heroes/heroes-20250923.avif";

const bgPhotos = [BG1, BG2, BG3];

const getHeroBgImage = () => {
  return bgPhotos[2];
};

const Services = () => {
  const ref = useRef(null);

  // Clinic services with appropriate icons
  const clinicServices = [
    {
      name: "Skin Treatment",
      icon: FaSpa,
      color: "from-pink-500 to-rose-600",
      description: "Acne, pigmentation, anti-aging treatments",
    },
    {
      name: "Hair Treatment",
      icon: FaCut,
      color: "from-purple-500 to-purple-600",
      description: "Hair fall, dandruff, scalp treatments",
    },
    {
      name: "Dermatology Care",
      icon: FaHandHoldingMedical,
      color: "from-emerald-500 to-emerald-600",
      description: "Comprehensive skin care solutions",
    },
    {
      name: "Hair Transplant Consultation",
      icon: FaUserMd,
      color: "from-blue-500 to-blue-600",
      description: "Expert consultation for hair restoration",
    },
    {
      name: "General Consultation",
      icon: FaStethoscope,
      color: "from-teal-500 to-teal-600",
      description: "Fever, common ailments, health checkups",
    },
    {
      name: "Skin Analysis",
      icon: FaMicroscope,
      color: "from-indigo-500 to-indigo-600",
      description: "Advanced skin diagnostics",
    },
    {
      name: "Cosmetic Treatments",
      icon: FaFlask,
      color: "from-cyan-500 to-cyan-600",
      description: "Chemical peels, facials, skin rejuvenation",
    },
    {
      name: "Personalized Care",
      icon: FaHeartbeat,
      color: "from-red-500 to-rose-600",
      description: "Customized treatment plans",
    },
    {
      name: "Safe & Hygienic",
      icon: FaShieldAlt,
      color: "from-green-500 to-green-600",
      description: "Maintaining highest cleanliness standards",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={getHeroBgImage()}
        badge={
          <>
            <FaSpa className="text-lg md:text-xl mr-2 md:mr-3 text-emerald-300" />
            <span className="text-label-sm tracking-wider uppercase text-white">
              Our Services
            </span>
          </>
        }
        title="Clinic Services"
        subtitle="Comprehensive Skin, Hair & General Healthcare Services in Salem"
      />

      {/* Main Content */}
      <section className="py-24 md:py-32" ref={ref}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-emerald-200 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <FaSpa className="text-emerald-600 text-lg" />
              <span className="text-label-sm text-emerald-700 tracking-wide uppercase">
                Our Services
              </span>
            </motion.div>

            <motion.h2
              className="text-display-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                Complete Skin & Hair Care
              </span>
            </motion.h2>

            <motion.p
              className="text-body-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Expert dermatological care and general health services
            </motion.p>
          </div>

          {/* Service Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {clinicServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.15), 0 10px 10px -5px rgba(16, 185, 129, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 group cursor-pointer p-6 flex flex-col items-center justify-center text-center min-h-[180px] transition-all duration-300 hover:border-emerald-200 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="text-white text-xl relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <h3 className="text-heading-sm text-gray-800 group-hover:text-emerald-600 transition-colors px-2 relative z-10 mb-2">
                    {service.name}
                  </h3>

                  <p className="text-sm text-gray-500 px-2 relative z-10">
                    {service.description}
                  </p>

                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
