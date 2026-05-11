import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item, fadeInUp } from "../../utils/animations";
import { CONTACT } from "../../utils/constants";

export const Hero: React.FC = () => {
  const proofPoints = [
    "Data-backed programming",
    "Elite coach supervision",
    "Nutrition + training alignment",
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={item} className="mb-5">
              <Badge variant="accent" className="tracking-wide uppercase text-xs">
                Elite Gym In Mawanella
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-5 leading-[1.04] text-balance"
            >
              Train Stronger.
              <br />
              <span className="gradient-text">Look Sharper.</span>
              <br />
              Perform Better.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-7 text-balance"
            >
              Premium coaching, proven programming, and a high-performance
              environment built to deliver visible results from your first month.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Programs
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  window.location.href = CONTACT.phoneLink;
                }}
              >
                <MessageCircle size={18} />
                Call {CONTACT.phone}
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-gray-200 text-sm md:text-base"
                >
                  <CheckCircle2 className="text-accent" size={18} />
                  {point}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-3 gap-3 max-w-xl"
            >
              <div className="premium-border rounded-xl px-3 py-3 text-center">
                <p className="text-xl font-bold text-white">22+</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                  Years Coaching
                </p>
              </div>
              <div className="premium-border rounded-xl px-3 py-3 text-center">
                <p className="text-xl font-bold text-white">7</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                  Training Tracks
                </p>
              </div>
              <div className="premium-border rounded-xl px-3 py-3 text-center">
                <p className="text-xl font-bold text-white">1:1</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                  Expert Support
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden premium-border">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop"
                alt="Extreme Fitness Center training space"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950 via-opacity-30 to-transparent" />

              <div className="absolute top-5 left-5 right-5 premium-border rounded-2xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck size={16} className="text-accent" />
                  Proven Results System
                </div>
                <div className="text-xs text-gray-300">Since 2004</div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                <div className="premium-border rounded-xl p-3">
                  <Trophy size={16} className="text-primary mb-2" />
                  <div className="text-xl font-bold text-white">7+</div>
                  <p className="text-xs text-gray-300">Elite Programs</p>
                </div>
                <div className="premium-border rounded-xl p-3">
                  <Zap size={16} className="text-primary mb-2" />
                  <div className="text-xl font-bold text-white">1:1</div>
                  <p className="text-xs text-gray-300">Focused Coaching</p>
                </div>
                <div className="premium-border rounded-xl p-3">
                  <CheckCircle2 size={16} className="text-primary mb-2" />
                  <div className="text-xl font-bold text-white">All</div>
                  <p className="text-xs text-gray-300">Fitness Levels</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
