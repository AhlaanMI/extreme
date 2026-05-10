import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Button = ({ variant = "primary", size = "md", children, icon, isLoading = false, className = "", ...props }) => {
    const baseClass = "btn";
    const variantClass = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline",
        "outline-accent": "btn-outline-accent",
    }[variant];
    const sizeClass = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }[size];
    return (_jsx(motion.button, { className: `${baseClass} ${variantClass} ${sizeClass} ${className}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, disabled: isLoading || props.disabled, ...props, children: isLoading ? (_jsx("div", { className: "animate-spin", children: "\u23F3" })) : (_jsxs(_Fragment, { children: [icon && _jsx("span", { children: icon }), children] })) }));
};
