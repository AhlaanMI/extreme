import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseClass = variant === "accent" ? "badge-accent" : "badge";

  return <span className={`${baseClass} ${className}`}>{children}</span>;
};
