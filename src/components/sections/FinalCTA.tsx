import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item } from "../../utils/animations";
import { CONTACT, BOOKING_PACKAGES } from "../../utils/constants";
import { MessageCircle } from "lucide-react";

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
    <section className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="premium-border rounded-3xl p-8 md:p-12 border-primary border-opacity-40"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <motion.div variants={item} className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="accent" className="uppercase tracking-widest">
                  Ready to Dominate Your Category
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white leading-tight">
                Let&apos;s Build a Fitness Brand
                <br />
                Clients Instantly Trust
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                From elite coaching services to premium perception, this
                experience is designed to attract high-intent clients and
                convert faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = CONTACT.phoneLink;
                  }}
                >
                  Start With a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
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
              <div className="premium-border rounded-2xl p-6 bg-transparent">
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
