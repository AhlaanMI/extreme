import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../../utils/constants";
import { Card } from "../ui/Card";
import { container, item } from "../../utils/animations";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-accent mb-4 inline-block uppercase tracking-wider">
            Signature Systems
          </div>
          <h2 className="section-title gradient-text">Programs That Deliver Results</h2>
          <p className="section-subtitle">
            Every service is engineered to build strength, confidence, and visible
            transformation with premium coaching quality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => {
            const IconComponent =
              LucideIcons[service.icon as keyof typeof LucideIcons] ||
              LucideIcons.Dumbbell;

            return (
              <motion.div key={service.title} variants={item}>
                <Card className="h-full premium-border hover:shadow-glow-lg hover:border-primary">
                  <div className="w-14 h-14 rounded-xl bg-primary bg-opacity-15 flex items-center justify-center mb-4 border border-primary border-opacity-30">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-6 pt-6 border-t border-white border-opacity-10 text-primary font-semibold hover:text-accent transition-colors text-center uppercase tracking-wide text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    Build My Plan →
                  </motion.button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
