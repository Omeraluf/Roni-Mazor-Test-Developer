"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "soft"
  | "success"
  | "danger"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-40 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C19BB8] text-white hover:bg-[#B187A7] focus-visible:ring-[#C19BB8]",
  secondary:
    "border border-[#D0D5DD] bg-white text-[#344054] hover:bg-[#F9FAFB] focus-visible:ring-[#D0D5DD]",
  soft:
    "bg-[#F2E7F2] text-[#874F6B] hover:bg-[#E6D5E6] focus-visible:ring-[#C19BB8]",
  success:
    "bg-[#16A34A] text-white hover:bg-[#15803D] focus-visible:ring-[#16A34A]",
  danger:
    "bg-[#EF4444] text-white hover:bg-[#DC2626] focus-visible:ring-[#EF4444]",
  ghost:
    "bg-transparent text-[#344054] hover:bg-[#F3F4F6] focus-visible:ring-[#D0D5DD]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
