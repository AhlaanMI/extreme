import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Facebook } from "lucide-react";
import { CONTACT, SITE_NAME, SITE_TAGLINE } from "../../utils/constants";
import { Button } from "../ui/Button";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const facebookLink =
    "https://www.facebook.com/ExtremefitnesscentreMawanella/";
  const mapsLink = "https://share.google/hTNpUpO8KrXqOmyVr";

  return (
    <footer className="bg-gradient-to-b from-dark-950 to-dark-900 border-t border-white border-opacity-10 noise-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{SITE_TAGLINE}</p>
            <div className="mb-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  window.location.href = CONTACT.phoneLink;
                }}
              >
                Call to Join
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <motion.a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Extreme Fitness Center Facebook"
                className="text-gray-300 hover:text-primary transition-colors"
                whileHover={{ scale: 1.12 }}
              >
                <Facebook size={22} />
              </motion.a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-primary transition-colors"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact & Location</h4>
            <div className="space-y-3">
              <a
                href={CONTACT.phoneLink}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                {CONTACT.phone}
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Extreme Fitness Center</p>
                  <p>{CONTACT.addressLine1}</p>
                  <p>{CONTACT.addressLine2}</p>
                </div>
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm text-primary hover:text-accent transition-colors"
              >
                View location on Google Maps
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-white border-opacity-10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">Mawanella, Sri Lanka</p>
          </div>

          <div className="flex items-center justify-center mt-6 pt-6 border-t border-white border-opacity-10">
            <p className="text-gray-500 text-xs">
              Built by{" "}
              <a
                href="https://flowstack.ink/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Flowstack
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
