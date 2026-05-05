import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item, fadeInUp } from "../../utils/animations";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <Badge variant="accent">
              🔥 Limited Founder Offer: 40% Off First Month
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight text-balance"
          >
            <span className="gradient-text">Transform</span> Your Body,
            <br />
            <span className="gradient-text">Dominate</span> Your Goals
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 text-balance"
          >
            Join elite performers building championship-level bodies. Premium
            training, personalized coaching, and a community of winners. Results
            in 90 days or your money back.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Free Trial
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </Button>
            <Button variant="outline" size="lg" icon={<Play size={20} />}>
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Image / Stats */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-dark border border-primary border-opacity-30">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop"
                alt="Premium gym facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
              <button className="absolute inset-0 flex items-center justify-center group">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary text-dark-950 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} fill="currentColor" />
                </motion.div>
              </button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-6 md:gap-12 max-w-xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                5000+
              </div>
              <p className="text-gray-400 text-sm">Members Transformed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                98%
              </div>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                15+
              </div>
              <p className="text-gray-400 text-sm">Expert Trainers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
