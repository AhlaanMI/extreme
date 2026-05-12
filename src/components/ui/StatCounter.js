import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useInView";
export const StatCounter = ({ value, label, prefix = "", suffix = "", valueClassName = "", labelClassName = "", }) => {
    const [ref, count] = useCountUp(value, 1500);
    return (_jsxs(motion.div, { ref: ref, className: "text-center", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: `text-3xl md:text-4xl font-bold gradient-text mb-1 ${valueClassName}`, children: [prefix, count, suffix] }), _jsx("div", { className: `text-gray-400 text-xs md:text-sm ${labelClassName}`, children: label })] }));
};
