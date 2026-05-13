import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "../../utils/constants";
import { Card } from "../ui/Card";
import { container, item } from "../../utils/animations";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden mesh-bg"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="heading-eyebrow mb-4">Signature Systems</div>
          <h2 className="section-title text-balance">
            Programs Built For{" "}
            <span className="gradient-text">Visible Results</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Every service is engineered to build strength, confidence, and
            visible transformation with premium coaching quality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons[
              service.icon as keyof typeof LucideIcons
            ] || LucideIcons.Dumbbell) as LucideIcon;

            return (
              <motion.div key={service.title} variants={item}>
                <Card className="group relative h-full overflow-hidden p-4 premium-border ring-soft noise-overlay hover:-translate-y-1 hover:border-primary/60 sm:p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-4 border border-primary/25 shadow-[0_10px_25px_rgba(255,0,0,0.08)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="mb-2 text-base font-bold tracking-tight text-white sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-muted">
                    {service.description}
                  </p>

                  <div className="space-y-1.5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex min-w-0 items-start gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(255,0,0,0.45)]"></div>
                        <span className="text-xs text-muted sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="mt-5 w-full border-t border-white/10 pt-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-primary transition-colors group-hover:text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    Build My Plan →
                  </motion.button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
