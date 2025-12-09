import { useRef, useEffect, useState } from "react";
const logoFullLocal = "/assets/logos/logo2.png";
const logoFull = logoFullLocal;
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

// Small Counter component: counts 0 -> end over `duration` ms when visible
function Counter({
  end = 0,
  suffix = "",
  duration = 2000,
  className = "text-heading-md text-slate-800",
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const elRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        } else if (!entry.isIntersecting && started) {
          // Reset when element goes out of view
          setStarted(false);
          setValue(0);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, end, duration]);

  return (
    <div ref={elRef}>
      <div className={className}>
        {value}
        {suffix}
      </div>
    </div>
  );
}

Counter.propTypes = {
  end: PropTypes.number,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Clinic Info - Enhanced */}
          <div className="lg:col-span-4">
            {/* Centered Logo Only - Increased Size */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-64 h-32 md:w-72 md:h-36 rounded-lg bg-white p-3 flex items-center justify-center shadow-lg">
                <img
                  src={logoFull}
                  alt="Nalinam Skin and Hair Clinic Logo"
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
              Providing expert skin, hair, and general healthcare services in Salem
              with personalized care and modern treatments.
            </p>

            {/* Social Media - Compact */}
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.instagram.com/nalinamclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/nalinamclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebook className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@nalinamclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Contact Information - Streamlined */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              Contact
            </h4>

            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  <span className="sr-only">Clinic Line</span>
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:9790029573"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    9790029573
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-0 text-teal-300 flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Email
                </h4>
                <a
                  href="mailto:contact.nalinam@gmail.com"
                  className="text-teal-300 hover:text-teal-200 transition-colors text-sm"
                >
                  contact.nalinam@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 bg-teal-900/20 rounded-lg p-2">
                <FaClock className="text-teal-400 text-sm" />
                <div>
                  <div className="text-white font-semibold text-sm">
                    Open Daily
                  </div>
                  <div className="text-teal-200 text-xs">
                    Convenient timings
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency - Prominent */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 text-emerald-400">
              <span className="sr-only">Appointments</span>
            </h4>

            <a
              href="tel:9790029573"
              className="block bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-4 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaPhoneAlt className="text-white text-lg" />
                <span className="font-bold text-white text-sm">
                  Book Appointment
                </span>
              </div>
              <div className="text-white text-lg font-bold">9790029573</div>
              <div className="text-emerald-100 text-xs">Call us today</div>
            </a>
          </div>

          {/* Location - Compact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-sm" />
              Location
            </h4>

            <div className="text-gray-300 text-sm leading-relaxed mb-4">
              <div className="font-semibold text-white mb-1">Address</div>
              <span>39, Kamaraj Colony, </span>
              <span>Omalur Main Road, </span>
              <span>Permanur, </span>
              <span>Salem - 636 007</span>
            </div>

            <div className="mt-2 flex justify-center lg:justify-start">
              <a
                href="https://maps.google.com/?q=39+Kamaraj+Colony+Omalur+Main+Road+Permanur+Salem+636007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium"
              >
                <FaMapMarkerAlt className="text-xs" />
                Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 Nalinam Skin and Hair Clinic. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm flex flex-col sm:flex-row items-center gap-2">
              <span>Website by</span>
              <a
                href="https://www.automconsultancy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-200 font-semibold ml-1"
                aria-label="Autom Consultancy Services website"
              >
                Autom Consultancy Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
