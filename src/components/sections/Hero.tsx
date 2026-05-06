import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Trophy, Zap } from "lucide-react";
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
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
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
            <motion.div variants={item} className="mb-6">
              <Badge variant="accent" className="tracking-wide uppercase">
                Premium Fitness Brand Experience
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.04] text-balance"
            >
              Transform Your Body With{" "}
              <span className="gradient-text">Elite-Level</span> Coaching
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 text-balance"
            >
              A high-performance training environment designed for serious results.
              We combine coaching, nutrition, and accountability to deliver
              measurable progress.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 items-start mb-10"
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
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = CONTACT.phoneLink;
                }}
              >
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
                  Trusted Results Framework
                </div>
                <div className="text-xs text-gray-300">Since Day One</div>
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
