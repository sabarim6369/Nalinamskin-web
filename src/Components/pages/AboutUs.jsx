import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import {
  FaHospital,
  FaUserMd,
  FaClock,
  FaMicroscope,
  FaHeartbeat,
  FaStethoscope,
  FaBed,
  FaAmbulance,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaDollarSign,
  FaClinicMedical,
} from "react-icons/fa";
import ChairmanCard from "../ui/ChairmanCard";
import FounderCard from "../ui/FounderCard";
import CeoCard from "../ui/CeoCard";
import HeroSection from "../ui/HeroSection";

// BG Photos for hero background - using public assets for better performance
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/infrastructure/infrastructure-wa0016.avif";
const BG4 = "/assets/heroes/main-3.avif";
// Doctor images used in leadership array
const doc2 = "/assets/doctors/doctor-2.avif";
const doc3 = "/assets/doctors/doctor-3.avif";

// BG Photos array for hero backgrounds
const bgPhotos = [BG1, BG2, BG3, BG4];

// Function to get hero background image (using second image for AboutUs)
const getHeroBgImage = () => {
  return bgPhotos[1]; // Use second image for AboutUs
};

// Counter component for stats (accepts className so we can reuse with different color schemes)
const AnimatedCounter = ({ end, suffix = "", className = "" }) => {
  const { count, ref } = useCountAnimation(end, 2000);
  return (
    <div ref={ref} className={`text-display-lg mb-2 ${className}`}>
      {count}
      {suffix}
    </div>
  );
};

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  className: PropTypes.string,
};

// Tiny inline counter used inside small chips (e.g., numbered badges)
const InlineCounter = ({ end, duration = 900, className = "" }) => {
  const { count, ref } = useCountAnimation(end, duration);
  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {count}
    </span>
  );
};

InlineCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Note: slide-in variants removed as they are not used in this page

  const stats = [
    { number: 150, label: "Hospital Beds", icon: FaBed, suffix: "+" },
    { number: 25, label: "Medical Specialties", icon: FaUserMd, suffix: "+" },
    { number: 4, label: "Operating Theatres", icon: FaMicroscope },
    { number: 30, label: "ICU Beds", icon: FaHeartbeat, suffix: "+" },
  ];

  // Removed unused local arrays to keep file lean

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={getHeroBgImage()}
        badge={
          <>
            <FaClinicMedical className="text-lg md:text-xl mr-2 md:mr-3 text-emerald-300" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white">
              Quality Skin & Hair Care in Salem
            </span>
          </>
        }
        title="About Nalinam Clinic"
        subtitle="Expert Dermatological Care with Personalized Attention & Modern Treatments"
      />

      {/* About Content Section with enhanced design */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-8"
            >
              {/* Tag removed as requested */}
            </motion.div>

            <h2 className="text-display-xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-8">
              Welcome to Nalinam Clinic
            </h2>

            <div className="max-w-5xl mx-auto space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
                style={{ textAlign: "justify" }}
              >
                Nalinam Skin and Hair Clinic is a trusted dermatology center in
                Salem, dedicated to providing comprehensive skin, hair, and
                general healthcare services. Led by experienced medical
                professionals, we combine clinical expertise with compassionate
                care to address all your dermatological concerns.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-emerald-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-heading-md text-gray-800">
                      Our Approach
                    </h3>
                  </div>
                  <p
                    className="text-body-md text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                    We believe in personalized care tailored to each patient's
                    unique needs. Our approach combines modern medical treatments
                    with a thorough understanding of individual skin and hair
                    types.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-emerald-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <h3 className="text-heading-md text-gray-800">
                      Our Promise
                    </h3>
                  </div>
                  <p
                    className="text-body-md text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                    Clean, hygienic environment with modern treatments. Affordable
                    pricing and compassionate care for every patient visiting our
                    Salem clinic.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Messages - Remove this entire section */}

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col h-full bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 lg:p-8 shadow-md border border-emerald-100/60 hover:shadow-lg transform-gpu transition-shadow"
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100/50 shadow-sm mb-4">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                      <span className="text-label-sm text-emerald-700 tracking-wide">
                        MISSION
                      </span>
                    </div>

                    <h4 className="text-heading-lg text-emerald-900 mb-4">
                      Our Mission
                    </h4>
                    <p
                      className="text-body-lg text-gray-700"
                      style={{ textAlign: "justify" }}
                    >
                      To provide accessible, high-quality dermatological and general
                      healthcare services in Salem. We strive to help every patient
                      achieve healthy skin, hair, and overall wellness.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full opacity-90" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, delay: 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col h-full bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 lg:p-8 shadow-md border border-emerald-100/60 hover:shadow-lg transform-gpu transition-shadow"
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100/50 shadow-sm mb-4">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                      <span className="text-label-sm text-emerald-700 tracking-wide">
                        VISION
                      </span>
                    </div>

                    <h4 className="text-heading-lg text-emerald-900 mb-4">
                      Our Vision
                    </h4>
                    <p
                      className="text-body-lg text-gray-700"
                      style={{ textAlign: "justify" }}
                    >
                      To be the most trusted dermatology clinic in Salem, recognized
                      for clinical excellence, patient satisfaction, and innovative
                      treatments while maintaining affordability.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full opacity-90 ml-auto" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative separator for larger screens */}
              <div className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center pointer-events-none">
                <div className="h-3/4 border-l-2 border-emerald-400 border-dotted opacity-90" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/95 border-2 border-emerald-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Remove Care Units & Facilities section entirely */}

      {/* Remove Our Care Excellence section entirely */}

      {/* Why Choose Us - Update heading */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <FaAward className="text-white text-xl" />
              <span className="text-white font-semibold text-sm tracking-wide">
                EXCELLENCE IN HEALTHCARE
              </span>
            </motion.div>

            <h2 className="text-display-xl bg-gradient-to-r from-gray-800 via-emerald-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Why Choose{" "}
              <span className="block">Nalinam Skin and Hair Clinic?</span>
            </h2>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-emerald-400 rounded-full" />
              <FaHeartbeat className="text-emerald-500 text-2xl animate-pulse" />
              <div className="w-12 h-1 bg-emerald-400 rounded-full" />
            </div>

            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              Discover why patients in Salem trust us with their skin, hair, and
              general health needs. Our commitment to personalized care and proven
              results sets us apart.
            </p>
          </motion.div>

          {/* Features Grid - 7 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Card 1: Expert Skin Care */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaAward className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Expert Skin Care
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Specialized dermatology treatments for acne, pigmentation,
                anti-aging, and all skin conditions with proven results.
              </p>
            </motion.div>

            {/* Card 2: Hair Treatment */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaHospital className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Hair Treatment
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Comprehensive solutions for hair fall, dandruff, scalp disorders,
                and hair restoration consultations.
              </p>
            </motion.div>

            {/* Card 3: General Health */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaAmbulance className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                General Health
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Quality medical care for fever, common ailments, and general health
                consultations in Salem.
              </p>
            </motion.div>

            {/* Card 4: Personalized Care */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaHandHoldingHeart className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">
                Personalized Care
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Individual treatment plans customized to your specific skin type,
                hair concerns, and health needs.
              </p>
            </motion.div>

            {/* Card 5: Modern Treatments */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaMicroscope className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                Modern Treatments
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Latest dermatological procedures and equipment for effective skin
                and hair care results.
              </p>
            </motion.div>

            {/* Card 6: Affordable Pricing */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaShieldAlt className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                Affordable Pricing
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Quality dermatological and medical care at transparent, reasonable
                prices accessible to everyone.
              </p>
            </motion.div>

            {/* Card 7: Clean & Hygienic */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaUsers className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
                Clean & Hygienic
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Maintaining highest standards of cleanliness and safety protocols
                for your well-being.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <FaHeartbeat className="text-white text-5xl mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Your Skin & Hair, Our Priority
              </h3>
              <p
                className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                Experience personalized dermatological care in Salem where expert
                medical treatment meets compassionate service. Join our satisfied
                patients today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
