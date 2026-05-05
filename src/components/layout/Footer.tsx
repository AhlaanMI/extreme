import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { SITE_NAME, NAV_LINKS } from "../../utils/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Transform your body. Elevate your mind. Dominate your goals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Memberships</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Foundation
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Elite
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Apex
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Corporate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@elite.fit"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                hello@elite.fit
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  123 Fitness Ave
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-white border-opacity-10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
