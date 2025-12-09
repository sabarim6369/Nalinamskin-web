import { motion } from "framer-motion";
import {
  FaHospital,
  FaUserMd,
  FaClock,
  FaShieldAlt,
  FaMicroscope,
  FaAmbulance,
  FaStethoscope,
  FaHandHoldingMedical,
} from "react-icons/fa";
import DoctorsSection from "./Doctors/DoctorsSection";
import SpecialitiesPreview from "./SpecialitiesPreview";

const AboutUs = () => {
  const whyChooseUs = [
    {
      icon: <FaUserMd className="text-3xl text-emerald-600" />,
      title: "Expert Dermatologists",
      description:
        "Highly qualified skin and hair specialists with proven expertise",
    },
    {
      icon: <FaMicroscope className="text-3xl text-emerald-600" />,
      title: "Modern Treatments",
      description:
        "Latest dermatology techniques and advanced treatment protocols",
    },
    {
      icon: <FaHospital className="text-3xl text-emerald-600" />,
      title: "Clean Clinic Environment",
      description:
        "Hygienic and comfortable setting for your peace of mind",
    },
    {
      icon: <FaStethoscope className="text-3xl text-emerald-600" />,
      title: "Personalized Treatment",
      description:
        "Customized care plans for your unique skin and hair concerns",
    },
    {
      icon: <FaClock className="text-3xl text-emerald-600" />,
      title: "Flexible Timings",
      description:
        "Convenient appointments to fit your busy schedule",
    },
    {
      icon: <FaHandHoldingMedical className="text-3xl text-emerald-600" />,
      title: "Affordable Care",
      description:
        "Quality dermatology services at transparent, reasonable prices",
    },
  ];

  const services = [
    {
      icon: <FaClock className="text-2xl text-white" />,
      title: "Flexible Appointments",
      description: "Convenient scheduling for all your skin and hair care needs",
    },
    {
      icon: <FaAmbulance className="text-2xl text-white" />,
      title: "General Consultation",
      description:
        "Comprehensive medical care for fever and common ailments",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Safe & Hygienic",
      description: "Maintaining highest standards of cleanliness and safety",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 lg:py-16 bg-white scroll-mt-32 lg:scroll-mt-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-heading-xl text-center text-emerald-900 mb-8">
            Why Choose Nalinam Skin and Hair Clinic?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-heading-sm font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Specialities preview - inserted after Why Choose Us */}
        <div className="mt-12">
          <SpecialitiesPreview count={4} />
        </div>

        {/* Doctors Section - inserted after specialities preview */}
        <div className="mt-12" id="doctors-section">
          <DoctorsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
