import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useInView";

interface StatCounterProps {
  value: string | number;
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label }) => {
  const [ref, count] = useCountUp(
    typeof value === "string" ? parseInt(value) : value,
    1500,
  );

  const displayValue =
    typeof value === "string"
      ? value
      : `${count}${typeof value === "string" ? value.replace(/[0-9]/g, "") : ""}`;

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
