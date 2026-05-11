import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useInView";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  prefix = "",
  suffix = "",
  valueClassName = "",
  labelClassName = "",
}) => {
  const [ref, count] = useCountUp(value, 1500);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`text-3xl md:text-4xl font-bold gradient-text mb-1 ${valueClassName}`}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div className={`text-gray-400 text-xs md:text-sm ${labelClassName}`}>
        {label}
      </div>
    </motion.div>
  );
};
