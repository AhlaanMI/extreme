import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Users, Zap } from "lucide-react";
import {
  slideInLeft,
  slideInRight,
  stagger,
  item,
} from "../../utils/animations";

export const About: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: "Personal Training",
      description:
        "Coaches who tailor workouts to your goals and fitness level",
    },
    {
      icon: Users,
      title: "Youth Classes",
      description: "Safe, energetic sessions for younger members",
    },
    {
      icon: Zap,
      title: "Nutrition Consulting",
      description: "Practical guidance to support healthy progress",
    },
    {
      icon: Check,
      title: "Supportive Environment",
      description: "Friendly coaching and motivation every session",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                alt="State-of-the-art gym facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-dark rounded-xl p-6 w-48"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                All Ages
              </div>
              <p className="text-sm text-gray-300">
                Programs for every fitness level
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <span className="badge-accent">Why Extreme Fitness Center</span>
            </motion.div>

            <h2 className="section-title mb-6">
              Built For <span className="gradient-text">Every Goal</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Extreme Fitness Center in Mawanella offers private lessons,
              personal training, nutrition consulting, youth classes, body
              building, fitness training, and weight training. Our coaches focus
              on safe progress, proper form, and confidence.
            </p>

            {/* Benefits Grid */}
            <motion.div
              className="space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary bg-opacity-20">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
