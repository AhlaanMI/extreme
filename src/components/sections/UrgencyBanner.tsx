import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { CONTACT } from "../../utils/constants";

export const UrgencyBanner: React.FC = () => {
  const [slotsLeft, setSlotsLeft] = useState(5);

  useEffect(() => {
    // Simulate slot reduction for urgency (production: fetch from backend)
    const interval = setInterval(() => {
      setSlotsLeft((prev) => Math.max(2, prev - Math.random() * 0.5));
    }, 45000); // Update every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const trustItems = [
    {
      icon: Shield,
      title: "No Lock-In",
      desc: "Cancel anytime. Month-to-month flexibility.",
    },
    {
      icon: CheckCircle2,
      title: "Satisfaction Guarantee",
      desc: "Results in 4-6 weeks or we adjust your program.",
    },
    {
      icon: Users,
      title: "Personal Coaching",
      desc: "Every member gets a dedicated coach.",
    },
    {
      icon: Clock,
      title: "Quick Start",
      desc: "First session within 48 hours of booking.",
    },
  ];

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main urgency card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-3xl border-primary/40 bg-gradient-to-br from-primary/10 via-dark-900 to-dark-950 p-5 premium-border sm:p-6 md:mb-12 md:p-10"
        >
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <div className="flex items-center gap-2 text-base font-bold text-accent sm:text-lg">
                  <Clock size={20} />
                  <span>Limited Spots Available</span>
                </div>
              </motion.div>

              <h2 className="mb-4 text-[clamp(1.75rem,7vw,2.25rem)] font-bold leading-tight text-white md:text-4xl">
                New Batch Starting
                <br />
                <span className="gradient-text">Next Monday</span>
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                We're accepting only{" "}
                <span className="text-accent font-semibold">
                  {Math.ceil(slotsLeft)} premium spots
                </span>{" "}
                for personalized coaching this month. Exclusive 1:1 attention
                with our head coach.
              </p>

              <div className="mb-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:items-center">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-gray-300">
                  First session discount (20%) ends in 48 hours
                </p>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => {
                  window.location.href = CONTACT.whatsappLink;
                }}
              >
                Claim Your Spot Now
              </Button>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white/[0.02] p-5 premium-border sm:p-6 md:p-8"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      Spots Remaining
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-accent">
                      {Math.ceil(slotsLeft)}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-gray-400 text-sm mb-1">Regular Price</p>
                    <p className="text-lg font-bold text-gray-400 line-through">
                      LKR 6,500
                    </p>
                    <p className="text-2xl font-bold text-accent">LKR 5,200</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white font-medium">
                      Free first assessment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white font-medium">
                      Personalized program
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white font-medium">
                      Nutrition guidance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white font-medium">
                      Lifetime support
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="premium-border rounded-2xl p-4 md:p-5 text-center hover:border-primary/60 transition-all group cursor-default"
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
