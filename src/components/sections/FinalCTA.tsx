import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item } from "../../utils/animations";
import { CONTACT } from "../../utils/constants";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      [
        "Hi! I'm interested in joining Extreme Fitness Center.",
        `Name: ${formData.fullName || "Not provided"}`,
        `Phone: ${formData.phone || "Not provided"}`,
        "",
        "Looking forward to my free consultation!",
      ].join("\n"),
    );

    window.open(`${CONTACT.whatsappLink}?text=${message}`, "_blank");
  };

  const isFormValid = formData.fullName.trim() && formData.phone.trim();

  return (
    <section className="section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="premium-border rounded-3xl p-8 md:p-12 border-primary border-opacity-40 noise-overlay"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left: Copy & Social Proof */}
            <motion.div variants={item} className="text-center lg:text-left">
              <div className="mb-5 inline-block lg:inline">
                <Badge variant="accent" className="uppercase tracking-widest text-xs">
                  🎯 Last Call This Month
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white leading-tight">
                Your Transformation
                <br />
                <span className="gradient-text">Starts Here</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-3 leading-relaxed">
                Join 200+ members who've already transformed their bodies and mindset. No experience needed—just commitment.
              </p>

              <div className="mb-8 space-y-2">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Free personalized assessment</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Custom workout plan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Month-to-month, no lock-in</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Results guaranteed in 4-6 weeks</span>
                </div>
              </div>

              <div className="hidden lg:block p-4 rounded-2xl bg-white/5 border border-primary/20 mb-8">
                <p className="text-sm text-gray-300">
                  <span className="text-accent font-bold">✓ 97% member satisfaction</span>
                  <br />
                  <span className="text-xs text-gray-400">
                    Based on 200+ transformations in 2024
                  </span>
                </p>
              </div>

              {/* Mobile-only quick CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    window.location.href = CONTACT.whatsappLink;
                  }}
                >
                  <MessageCircle size={18} />
                  Message on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    window.location.href = CONTACT.phoneLink;
                  }}
                >
                  <Phone size={18} />
                  Call Now
                </Button>
              </div>
            </motion.div>

            {/* Right: Simplified Form */}
            <motion.div variants={item} className="lg:flex flex-col justify-center">
              <div className="premium-border rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/[0.03] to-transparent">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Get Your Free Consultation
                </h3>

                <form
                  className="grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (isFormValid) {
                      openWhatsApp();
                    }
                  }}
                >
                  {/* Name Input */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., John Doe"
                      value={formData.fullName}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          fullName: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-dark-950/40 px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 71 234 5678"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-dark-950/40 px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
                      required
                    />
                  </div>

                  {/* Trust statement */}
                  <div className="text-xs text-gray-400 text-center py-2 border-y border-white/10">
                    We'll respond within 1 hour during business hours
                  </div>

                  {/* Primary CTA Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2 mt-2"
                    disabled={!isFormValid}
                    onClick={() => {
                      openWhatsApp();
                    }}
                  >
                    <MessageCircle size={18} />
                    Start on WhatsApp
                    <ArrowRight size={16} />
                  </Button>

                  {/* Secondary CTA */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => {
                      window.location.href = CONTACT.phoneLink;
                    }}
                  >
                    <Phone size={18} />
                    Prefer to Call?
                  </Button>
                </form>

                {/* Benefit callout */}
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-white text-sm font-medium mb-1">
                    🎁 First Month Discount
                  </p>
                  <p className="text-xs text-gray-300">
                    Join this month and get 20% off your first month. Offer ends in 48 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer contact info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
