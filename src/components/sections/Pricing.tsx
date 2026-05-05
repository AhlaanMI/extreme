import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CONTACT, MEMBERSHIPS } from "../../utils/constants";
import { Button } from "../ui/Button";
import { container, item } from "../../utils/animations";

export const Pricing: React.FC = () => {
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
            Choose Your <span className="gradient-text">Program</span>
          </h2>
          <p className="section-subtitle">
            Call us for current rates and scheduling.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {MEMBERSHIPS.map((membership, index) => (
            <motion.div
              key={membership.name}
              variants={item}
              className={`relative rounded-2xl transition-all ${
                membership.highlighted ? "md:scale-105" : ""
              }`}
            >
              {/* Glow Effect for Highlighted */}
              {membership.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 -z-10"></div>
              )}

              <div
                className={`glass rounded-2xl p-8 h-full flex flex-col ${membership.highlighted ? "border-primary" : "border-white"} border-opacity-30`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {membership.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {membership.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-white">
                    {membership.price}
                    <span className="text-lg text-gray-400 font-normal">
                      / {membership.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow">
                  {membership.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={membership.highlighted ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {membership.cta}
                </Button>
              </div>
            </motion.div>
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
