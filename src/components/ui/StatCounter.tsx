import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useInView";

interface StatCounterProps {
  value: string | number;
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label }) => {
  const numericValue = typeof value === "string" ? parseInt(value, 10) : value;
  const [ref, count] = useCountUp(numericValue, 1500);

  const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";
  const displayValue = typeof value === "string" ? value : `${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <div className="text-gray-400 text-sm md:text-base">{label}</div>
    </motion.div>
  );
};
