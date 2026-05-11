import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { container, item, fadeInUp } from "../../utils/animations";
import { CONTACT } from "../../utils/constants";
import { StatCounter } from "../ui/StatCounter";
import heroImage from "../../images/2.avif";

export const Hero: React.FC = () => {
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const glowY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const proofPoints = [
    "Data-backed programming",
    "Elite coach supervision",
    "Nutrition + training alignment",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden mesh-bg noise-overlay"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : glowY }}
          className="absolute top-20 right-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : mediaY }}
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"
        />
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
              <Badge
                variant="accent"
                className="tracking-wide uppercase text-xs"
              >
                Elite Gym In Mawanella
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-5 leading-[1.02] text-balance tracking-tight"
            >
              Train Stronger.
              <br />
              <span className="gradient-text">Look Sharper.</span>
              <br />
              Perform Better.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-7 text-balance leading-relaxed"
            >
              Premium coaching, proven programming, and a high-performance
              environment built to deliver visible results from your first
              month.
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
                <StatCounter value={22} suffix="+" label="Years Coaching" />
              </div>
              <div className="premium-border rounded-xl px-3 py-3 text-center">
                <StatCounter value={7} label="Training Tracks" />
              </div>
              <div className="premium-border rounded-xl px-3 py-3 text-center">
                <StatCounter value={1} suffix=":1" label="Expert Support" />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            ref={mediaRef}
            style={{ y: shouldReduceMotion ? 0 : mediaY }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden premium-border">
              <img
                src={heroImage}
                alt="Extreme Fitness Center - Premium coaching environment"
                className="w-full h-full object-cover object-center brightness-110 contrast-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 via-dark-950/5 to-transparent" />

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
