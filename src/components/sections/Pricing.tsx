import React from "react";
import { motion } from "framer-motion";
import { BOOKING_PACKAGES, CONTACT } from "../../utils/constants";
import { Button } from "../ui/Button";

export const Pricing: React.FC = () => {
  const packages = BOOKING_PACKAGES.map((pkg) => ({
    ...pkg,
    isPopular: pkg.name === "Annual",
  }));

  return (
    <section
      id="pricing"
      className="section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="heading-eyebrow mb-4">Training Options</div>
          <h2 className="section-title">
            Membership <span className="gradient-text">Packages</span>
          </h2>
          <p className="section-subtitle">
            Transparent rates with no hidden costs.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          className="hidden md:block max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-2xl overflow-hidden border border-white/20 noise-overlay">
            <table className="w-full text-left">
              <thead className="bg-white bg-opacity-5">
                <tr>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider text-gray-300">
                    Package
                  </th>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider text-gray-300">
                    Registration fee
                  </th>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider text-gray-300">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider text-gray-300 text-right">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr
                    key={pkg.name}
                    className={`border-t border-white/10 transition-colors hover:bg-white/5 ${pkg.isPopular ? "bg-primary/10 hover:bg-primary/15" : ""}`}
                  >
                    <td className="px-6 py-4 text-white font-semibold">
                      <div className="inline-flex items-center gap-2">
                        {pkg.name}
                        {pkg.isPopular && (
                          <span className="badge-accent text-[10px] uppercase tracking-[0.18em]">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {pkg.registrationFee}
                    </td>
                    <td className="px-6 py-4 text-primary font-semibold">
                      {pkg.amount}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-300 text-sm">
                      {pkg.isPopular ? "Best savings" : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:hidden max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass rounded-xl p-4 border border-white border-opacity-15 ${pkg.isPopular ? "border-primary/50 bg-primary/10" : ""}`}
            >
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                {pkg.name}
                {pkg.isPopular && (
                  <span className="badge-accent text-[10px] uppercase tracking-[0.18em]">
                    Popular
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-300">
                Registration fee: {pkg.registrationFee}
              </p>
              <p className="text-sm text-primary font-semibold mt-1">
                Amount: {pkg.amount}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Contact Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-base sm:text-lg mb-5">
            📞 Call {CONTACT.phone} for package recommendations and slot
            availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              variant="primary"
              onClick={() => {
                window.location.href = CONTACT.phoneLink;
              }}
            >
              Book Consultation Call
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Compare Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
