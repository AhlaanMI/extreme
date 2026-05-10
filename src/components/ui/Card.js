import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Card = ({ children, className = "", variant = "glass", hover = true, }) => {
    const baseClass = variant === "glass" ? "glass" : "glass-dark";
    return (_jsx(motion.div, { className: `${baseClass} rounded-xl p-6 transition-all duration-300 ${className}`, whileHover: hover ? { y: -8 } : {}, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: children }));
};
