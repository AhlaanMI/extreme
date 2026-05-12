import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { container, item } from "../../utils/animations";
import { BOOKING_PACKAGES, CONTACT } from "../../utils/constants";

export const FinalCTA: React.FC = () => {
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
      id="final-cta"
      className="section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl border border-primary border-opacity-40 p-5 premium-border noise-overlay sm:p-8 md:p-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2"
          >
            <motion.div variants={item} className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="accent" className="uppercase tracking-widest">
                  READY TO DOMINATE YOUR CATEGORY
                </Badge>
              </div>

              <h2 className="mb-4 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s Build a Fitness Brand
                <br />
                Clients Instantly Trust
              </h2>

              <p className="mb-8 max-w-xl text-base text-gray-300 sm:text-lg md:text-xl">
                From elite coaching services to premium perception, this
                experience is designed to attract high-intent clients and
                convert faster.
              </p>

              <div className="flex flex-col items-stretch justify-start gap-4 sm:flex-row sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.location.href = CONTACT.phoneLink;
                  }}
                >
                  Start With a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Signature Programs
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="rounded-2xl bg-transparent p-4 premium-border sm:p-6">
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
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
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
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
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
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
                  />

                  <select
                    value={formData.packageName}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        packageName: event.target.value,
                      }))
                    }
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
                  >
                    <option value="">Select service</option>
                    {BOOKING_PACKAGES.map((pkg) => (
                      <option key={pkg.name} value={pkg.name}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals, availability, and anything we should know"
                    value={formData.notes}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        notes: event.target.value,
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/50 outline-none transition-all resize-none focus:border-primary focus:shadow-[0_0_0_6px_rgba(255,0,0,0.06)]"
                  />

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
