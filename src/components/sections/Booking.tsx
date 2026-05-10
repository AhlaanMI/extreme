import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { BOOKING_PACKAGES, CONTACT } from "../../utils/constants";

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    phone: "",
    packageName: "",
    notes: "",
  });

  const openWhatsApp = () => {
    const packageLine = formData.packageName
      ? `Package: ${formData.packageName}`
      : "Package: Not selected yet";

    const message = encodeURIComponent(
      [
        "Hi, I would like to book a call.",
        `Full name: ${formData.fullName || "Not provided"}`,
        `Date: ${formData.date || "Not provided"}`,
        `Phone: ${formData.phone || "Not provided"}`,
        packageLine,
        `Notes: ${formData.notes || "No additional notes"}`,
      ].join("\n"),
    );

    window.open(`${CONTACT.whatsappLink}?text=${message}`, "_blank");
  };

  return (
    <section
      id="booking"
      className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="accent" className="uppercase tracking-[0.2em] mb-4">
            Book a Call
          </Badge>
          <h2 className="section-title">
            Simple <span className="gradient-text">WhatsApp Form</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Fill in the form, choose your package, and send everything to us on
            WhatsApp in one tap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto premium-border ring-soft rounded-[2rem] p-5 sm:p-8 md:p-10"
        >
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              openWhatsApp();
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    fullName: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-[#d7c9f0] bg-white px-5 py-4 text-[#1e1e1e] placeholder:text-[#9b9bb3] outline-none transition-all focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,0,0,0.08)]"
              />

              <input
                type="date"
                value={formData.date}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    date: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-[#d7c9f0] bg-white px-5 py-4 text-[#1e1e1e] outline-none transition-all focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,0,0,0.08)]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-[#d7c9f0] bg-white px-5 py-4 text-[#1e1e1e] placeholder:text-[#9b9bb3] outline-none transition-all focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,0,0,0.08)]"
            />

            <div className="relative">
              <select
                value={formData.packageName}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    packageName: event.target.value,
                  }))
                }
                className="w-full appearance-none rounded-2xl border border-[#d7c9f0] bg-white px-5 py-4 text-[#1e1e1e] outline-none transition-all focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,0,0,0.08)]"
              >
                <option value="">Select service</option>
                {BOOKING_PACKAGES.map((pkg) => (
                  <option key={pkg.name} value={pkg.name}>
                    {pkg.name}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              rows={5}
              placeholder="Tell us about your goals, availability, and anything we should know"
              value={formData.notes}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  notes: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-[#d7c9f0] bg-white px-5 py-4 text-[#1e1e1e] placeholder:text-[#9b9bb3] outline-none transition-all resize-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,0,0,0.08)]"
            />

            <div className="pt-2">
              <Button variant="primary" size="lg" className="px-6 sm:px-8">
                <MessageCircle size={18} />
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
