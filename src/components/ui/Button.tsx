import React from "react";
import { motion } from "framer-motion";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag"> {
  variant?: "primary" | "secondary" | "outline" | "outline-accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  isLoading = false,
  className = "",
  ...props
}) => {
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

  return (
    <motion.button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading || props.disabled}
      {...(props as any)}
    >
      {isLoading ? (
        <div className="animate-spin">⏳</div>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};
