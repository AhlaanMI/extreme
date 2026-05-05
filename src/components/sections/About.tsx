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
      title: "Elite Trainers",
      description:
        "ISSA & NASM certified professionals with 10+ years experience",
    },
    {
      icon: Users,
      title: "Tight Community",
      description: "Network with high-performers and like-minded achievers",
    },
    {
      icon: Zap,
      title: "Proven Results",
      description:
        "Science-backed programs with measurable outcomes in 90 days",
    },
    {
      icon: Check,
      title: "24/7 Support",
      description: "Round-the-clock assistance via phone, email, and chat",
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
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-sm text-gray-300">
                Members achieve their goals
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
              <span className="badge-accent">Why Elite Performance</span>
            </motion.div>

            <h2 className="section-title mb-6">
              Built For <span className="gradient-text">Champions</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're not a typical gym. Elite Performance is a transformation hub
              for serious athletes and achievers. Our personalized approach
              combines cutting-edge training science with premium facilities and
              world-class coaching.
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
