import React from "react";
import { motion } from "framer-motion";
import { TRAINERS } from "../../utils/constants";
import { container, item } from "../../utils/animations";

export const Trainers: React.FC = () => {
  return (
    <section
      id="trainers"
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
          <div className="badge-accent mb-4 inline-block">Expert Team</div>
          <h2 className="section-title">
            Meet Your <span className="gradient-text">Coaches</span>
          </h2>
          <p className="section-subtitle">
            Certified professionals with years of experience transforming bodies
            and minds.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={item}
              className="glass rounded-2xl overflow-hidden hover:shadow-glow-lg transition-all group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-dark-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 badge-accent text-xs">
                  {trainer.specialty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-white">
                  {trainer.name}
                </h3>
                <p className="text-primary text-sm font-semibold mb-3">
                  {trainer.title}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {trainer.bio}
                </p>

                {/* CTA */}
                <motion.button
                  className="w-full mt-4 py-2 rounded-lg bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all text-sm font-semibold"
                  whileHover={{ scale: 1.02 }}
                >
                  Book Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
