import { jsx as _jsx } from "react/jsx-runtime";
export const Badge = ({ children, variant = "default", className = "", }) => {
    const baseClass = variant === "accent" ? "badge-accent" : "badge";
    return _jsx("span", { className: `${baseClass} ${className}`, children: children });
};
