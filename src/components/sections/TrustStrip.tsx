import React from "react";
import { motion } from "framer-motion";
import { Award, CalendarDays, ShieldCheck, Users } from "lucide-react";
import { StatCounter } from "../ui/StatCounter";

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      value: 22,
      suffix: "+",
      title: "Years Legacy",
      subtitle: "Coaching experience in strength training",
      icon: Award,
    },
    {
      value: 7,
      title: "Core Programs",
      subtitle: "Personalized pathways for every goal",
      icon: ShieldCheck,
    },
    {
      value: 1,
      suffix: ":1",
      title: "Coach Support",
      subtitle: "Focused guidance in every session",
      icon: Users,
    },
    {
      value: 2004,
      title: "Since Opening",
      subtitle: "Landmark gym on New Kandy Road",
      icon: CalendarDays,
    },
  ];

  return (
    <section className="border-y border-white border-opacity-10 bg-dark-900/40 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300 sm:text-xs sm:tracking-[0.24em]">
          Trusted by Beginners to Advanced Athletes
        </p>

        <motion.div
          className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl p-4 premium-border transition-colors hover:border-primary/70 sm:p-6"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <item.icon className="h-4 w-4 text-primary mb-2" />
              <StatCounter
                value={item.value}
                suffix={item.suffix}
                label={item.title}
                valueClassName="text-2xl md:text-3xl mb-0"
                labelClassName="uppercase tracking-[0.14em] text-[10px]"
              />
              <div className="mt-2 text-center text-[11px] leading-relaxed text-gray-300 sm:text-xs">
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
