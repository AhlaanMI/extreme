import React from "react";
import { motion } from "framer-motion";
import { SITE_NAME } from "../../utils/constants";

export const TrustStrip: React.FC = () => {
  const testimonials = [
    { name: "Forbes", title: '\"Best Gym in NYC\"' },
    { name: "New York Times", title: '\"Elite Performance Awards\"' },
    { name: "Men's Fitness", title: '\"Top 10 Gyms USA\"' },
    { name: "Entrepreneur", title: '\"Transformation Leaders\"' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border-y border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm mb-8 uppercase tracking-wider font-semibold">
          Trusted by Champions & Featured In
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center glass-dark rounded-lg p-6 hover:border-primary border-white border-opacity-10 transition-colors"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-sm font-semibold text-primary mb-1">
                {item.name}
              </div>
              <div className="text-xs text-gray-400 text-center">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
