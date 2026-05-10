import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE_NAME } from "../../utils/constants";
import { Button } from "../ui/Button";
import logo from "../../../logo.jpg";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dark-950/80 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${SITE_NAME} logo`}
                className="h-10 w-10 object-contain rounded-full border border-white/15 ring-soft"
              />
              <div className="leading-tight">
                <span className="text-xl font-display font-bold gradient-text block">
                  {SITE_NAME}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
                  Performance Studio
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide"
                whileHover={{ color: "#ff1a1a" }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-full px-3 py-2 premium-border text-xs text-gray-300">
              <Sparkles size={14} className="text-accent" />
              Elite Coaching
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                window.location.href = CONTACT.phoneLink;
              }}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 pt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="premium-border rounded-2xl p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-muted hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.location.href = CONTACT.phoneLink;
                  }}
                >
                  Call {CONTACT.phone}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
