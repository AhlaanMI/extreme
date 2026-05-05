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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-accent mb-4 inline-block">Our Services</div>
          <h2 className="section-title gradient-text">Training Services</h2>
          <p className="section-subtitle">
            Choose from private lessons, personal training, nutrition consulting,
            youth classes, body building, fitness training, and weight training.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent =
              LucideIcons[service.icon as keyof typeof LucideIcons] ||
              LucideIcons.Dumbbell;

            return (
              <motion.div key={service.title} variants={item}>
                <Card className="h-full hover:shadow-glow-lg hover:border-primary border-white border-opacity-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full mt-6 pt-6 border-t border-white border-opacity-10 text-primary font-semibold hover:text-accent transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    Learn More →
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
