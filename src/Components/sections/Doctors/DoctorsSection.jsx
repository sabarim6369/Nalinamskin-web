import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaGraduationCap,
  FaStethoscope,
} from "react-icons/fa";
import { doctors } from "../../../data/DoctorDepartmentData";
import DefaultDoctorAvatar from "../../ui/DefaultDoctorAvatar";

const DoctorsSection = ({ limit }) => {
  const navigate = useNavigate();

  const items = doctors || [];
  // Show only 2 doctors for the clinic
  const displayedItems = items.slice(0, 2);

  return (
    <section
      id="doctors-section"
      className="py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <FaUserMd className="text-3xl lg:text-4xl text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewport={{ once: true }}
                className="absolute -inset-3 bg-emerald-100 rounded-full opacity-30 animate-pulse"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-display-xl text-emerald-900 mb-4"
          >
            Meet Our Doctors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our dedicated medical professionals bring expertise in skin, hair care, and general health to provide you with personalized treatment.
          </motion.p>
        </motion.div>

        {/* Doctors Grid - 2 columns on desktop, 1 on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {displayedItems.map((doctor, idx) => {
            const keyId =
              (doctor?.name || "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-") || `doctor-${idx}`;
            return (
              <motion.div
                key={keyId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Doctor Image */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-32 h-32 lg:w-40 lg:h-40">
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full rounded-full object-cover border-4 border-emerald-200 shadow-lg group-hover:border-emerald-400 transition-colors duration-300"
                          />
                        ) : (
                          <DefaultDoctorAvatar
                            name={doctor.name}
                            className="w-full h-full border-4 border-emerald-200 group-hover:border-emerald-400 transition-colors duration-300"
                          />
                        )}
                      </div>
                      {/* Medical icon badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                        <FaStethoscope className="text-white text-sm lg:text-base" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Doctor Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-heading-lg text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {doctor.name}
                    </h3>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                      <FaGraduationCap className="text-emerald-600 text-sm" />
                      <p className="text-sm text-emerald-700 font-medium">
                        {doctor.qualification}
                      </p>
                    </div>

                    <p className="text-base lg:text-lg text-emerald-600 font-semibold">
                      {doctor.specialty}
                    </p>

                    {/* Decorative line */}
                    <div className="pt-4">
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto group-hover:w-24 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover shimmer effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent transition-transform duration-700 ease-out" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Optional: See all doctors button - commented out since we only have 2 doctors */}
        {/* 
        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/doctors")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Doctors
          </motion.button>
        </div>
        */}
      </div>
    </section>
  );
};

DoctorsSection.propTypes = {
  limit: PropTypes.number,
};

export default DoctorsSection;
