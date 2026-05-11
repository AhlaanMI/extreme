import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../../utils/constants";
import { Button } from "../ui/Button";

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge-accent mb-4 inline-block">Testimonials</div>
          <h2 className="section-title">
            Hear From Our <span className="gradient-text">Members</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real member stories from coaching programs built for measurable
            progress.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 min-h-96 flex flex-col justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-display text-white mb-8 leading-relaxed text-balance">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white border-opacity-10">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-gray-600 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="mt-10 text-center">
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Membership Packages
          </Button>
        </div>
      </div>
    </section>
  );
};
