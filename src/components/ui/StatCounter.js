import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useInView";
export const StatCounter = ({ value, label }) => {
    const numericValue = typeof value === "string" ? parseInt(value, 10) : value;
    const [ref, count] = useCountUp(numericValue, 1500);
    const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";
    const displayValue = typeof value === "string" ? value : `${count}${suffix}`;
    return (_jsxs(motion.div, { ref: ref, className: "text-center", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsx("div", { className: "text-4xl md:text-5xl font-bold gradient-text mb-2", children: displayValue }), _jsx("div", { className: "text-gray-400 text-sm md:text-base", children: label })] }));
};
