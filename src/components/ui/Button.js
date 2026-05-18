import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Button = ({ variant = "primary", size = "md", type = "button", children, icon, isLoading = false, className = "", ...props }) => {
    const baseClass = "btn";
    const variantClass = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
        "outline-accent": "btn-outline-accent",
    }[variant];
    const sizeClass = {
        sm: "px-3.5 py-2 text-sm sm:px-4",
        md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
        lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
    }[size];
    return (_jsx(motion.button, { type: type, className: `${baseClass} ${variantClass} ${sizeClass} ${className}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, disabled: isLoading || props.disabled, ...props, children: isLoading ? (_jsx("div", { className: "animate-spin", children: "\u23F3" })) : (_jsxs(_Fragment, { children: [icon && _jsx("span", { children: icon }), children] })) }));
};
