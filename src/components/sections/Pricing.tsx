import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../../utils/constants";

export const Pricing: React.FC = () => {
  const packages = [
    { name: "Monthly", registrationFee: "LKR 3,500", amount: "LKR 6,500" },
    { name: "3 Month", registrationFee: "Free", amount: "LKR 16,000" },
    { name: "6 Month", registrationFee: "Free", amount: "LKR 32,000" },
    { name: "Annual", registrationFee: "Free", amount: "LKR 52,000" },
    { name: "School", registrationFee: "LKR 3,500", amount: "LKR 5,500" },
    {
      name: "Couple package",
      registrationFee: "LKR 3,500",
      amount: "LKR 12,000",
    },
    { name: "Day payment", registrationFee: "-", amount: "LKR 1,000" },
  ];

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-accent mb-4 inline-block">Training Options</div>
          <h2 className="section-title">
            Membership <span className="gradient-text">Packages</span>
          </h2>
          <p className="section-subtitle">
            Organized fee structure for all membership options.
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
          <div className="glass rounded-2xl overflow-hidden border border-white border-opacity-20">
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
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr
                    key={pkg.name}
                    className="border-t border-white border-opacity-10"
                  >
                    <td className="px-6 py-4 text-white font-semibold">
                      {pkg.name}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {pkg.registrationFee}
                    </td>
                    <td className="px-6 py-4 text-primary font-semibold">
                      {pkg.amount}
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
              className="glass rounded-xl p-4 border border-white border-opacity-15"
            >
              <p className="text-white font-semibold mb-2">{pkg.name}</p>
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
          <p className="text-gray-400 text-lg">
            📞 Call {CONTACT.phone} for pricing details and availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
