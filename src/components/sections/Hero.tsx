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
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden pb-14 pt-24 mesh-bg noise-overlay sm:min-h-screen sm:pb-16 sm:pt-28 md:pb-24 md:pt-36"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : glowY }}
          className="absolute right-0 top-16 h-64 w-64 rounded-full bg-primary opacity-20 blur-3xl sm:top-20 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : mediaY }}
          className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-accent opacity-10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
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
              className="mb-5 text-balance font-display text-[clamp(2rem,9vw,4.5rem)] font-bold leading-tight tracking-tight sm:leading-[1.02]"
            >
              Train Stronger.
              <br />
              <span className="gradient-text">Look Sharper.</span>
              <br />
              Perform Better.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-7 max-w-2xl text-balance text-sm leading-relaxed text-gray-300 sm:text-lg md:text-xl"
            >
              Premium coaching, proven programming, and a high-performance
              environment built to deliver visible results from your first
              month.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mb-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
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
                className="w-full sm:w-auto"
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
                  className="flex items-start gap-3 text-sm text-gray-200 md:text-base"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-accent"
                    size={18}
                  />
                  <span className="min-w-0">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
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

              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:bottom-5 sm:left-5 sm:right-5 sm:grid-cols-3 sm:gap-3">
                <div className="premium-border rounded-xl p-2.5 sm:p-3">
                  <Trophy size={16} className="mb-2 text-primary" />
                  <div className="text-base font-bold text-white sm:text-xl">
                    7+
                  </div>
                  <p className="text-xs text-gray-300">Elite Programs</p>
                </div>
                <div className="premium-border rounded-xl p-2.5 sm:p-3">
                  <Zap size={16} className="mb-2 text-primary" />
                  <div className="text-base font-bold text-white sm:text-xl">
                    1:1
                  </div>
                  <p className="text-xs text-gray-300">Focused Coaching</p>
                </div>
                <div className="premium-border rounded-xl p-2.5 sm:p-3">
                  <CheckCircle2 size={16} className="mb-2 text-primary" />
                  <div className="text-base font-bold text-white sm:text-xl">
                    All
                  </div>
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
