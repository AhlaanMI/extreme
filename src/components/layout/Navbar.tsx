import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE_NAME } from "../../utils/constants";
import { Button } from "../ui/Button";
import logo from "../../../logo.jpg";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dark-950/78 border-b border-white/10 supports-[backdrop-filter]:bg-dark-950/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="min-w-0 shrink pr-3"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#hero"
              className="flex max-w-full items-center gap-2 sm:gap-3"
            >
              <img
                src={logo}
                alt={`${SITE_NAME} logo`}
                className="h-9 w-9 rounded-full border border-white/15 object-contain ring-soft sm:h-10 sm:w-10"
              />
              <div className="min-w-0 leading-tight">
                <span className="gradient-text block truncate font-display text-sm font-bold sm:text-xl">
                  {SITE_NAME}
                </span>
                <span className="hidden truncate text-[10px] uppercase tracking-[0.14em] text-gray-400 min-[420px]:block sm:text-[11px] sm:tracking-[0.22em]">
                  Strength & Conditioning
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
                className="text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
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
              Limited Slots Open
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                document
                  .getElementById("final-cta")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2.5 premium-border md:hidden sm:p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 pt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24 }}
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
                      setIsOpen(false);
                      document
                        .getElementById("final-cta")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Start with {CONTACT.phone}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
