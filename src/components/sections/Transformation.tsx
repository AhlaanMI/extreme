import React from "react";
import { motion } from "framer-motion";
import { TRANSFORMATIONS } from "../../utils/constants";
import { container, item } from "../../utils/animations";

export const Transformation: React.FC = () => {
  return (
    <section className="section relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-14 left-0 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
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
          <div className="heading-eyebrow mb-4">Member Progress</div>
          <h2 className="section-title">
            Training <span className="gradient-text">Journeys</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Consistent coaching and support help members build healthy habits.
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRANSFORMATIONS.map((transformation, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass premium-border rounded-2xl overflow-hidden hover:shadow-glow-lg transition-all hover:-translate-y-1"
            >
              {/* Before/After Images */}
              <div className="relative grid grid-cols-2 gap-2 p-4 bg-dark-900 bg-opacity-50">
                <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-white/10" />
                <div>
                  <p className="text-xs text-gray-400 mb-2 font-semibold">
                    Before
                  </p>
                  <img
                    src={transformation.before}
                    alt={`${transformation.name} before`}
                    className="w-full aspect-square object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2 font-semibold">
                    After
                  </p>
                  <img
                    src={transformation.after}
                    alt={`${transformation.name} after`}
                    className="w-full aspect-square object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 text-white">
                  {transformation.name}
                </h3>
                <p className="text-primary text-sm font-semibold mb-3">
                  {transformation.duration}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {transformation.result}
                </p>

                {/* Badge */}
                <div className="mt-4 pt-4 border-t border-white border-opacity-10">
                  <span className="badge-accent text-xs">Success Story</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
