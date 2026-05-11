import React from "react";
import { motion } from "framer-motion";

export const TrustStrip: React.FC = () => {
  const highlights = [
    { metric: "22+ Years", title: "Coaching experience in strength training" },
    { metric: "7 Programs", title: "Personalized pathways for every goal" },
    { metric: "1:1 Support", title: "Focused coach guidance every session" },
    { metric: "Prime Location", title: "New Kandy Road, Mawanella" },
  ];

  return (
    <section className="py-10 md:py-14 border-y border-white border-opacity-10 bg-dark-900 bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-300 text-[11px] sm:text-xs mb-7 uppercase tracking-[0.28em] font-semibold">
          Trusted by Beginners to Advanced Athletes
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center premium-border rounded-xl p-5 sm:p-6 hover:border-primary/70 transition-colors"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-sm sm:text-base font-semibold text-primary mb-1 uppercase tracking-wide">
                {item.metric}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-300 text-center leading-relaxed">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
