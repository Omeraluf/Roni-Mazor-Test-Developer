import { HTMLAttributes } from "react";

type TagVariant = "success" | "outline" | "purple" | "neutral";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
  success:
    "bg-[#E1FCE5] text-[#15803D] border border-[#BBF7D0]",
  outline:
    "border border-[#E5E7EB] text-[#4B5563] bg-white",
  purple:
    "bg-[#F2E7F7] text-[#7E3A83] border border-[#E5D0F0]",
  neutral:
    "bg-[#F3F4F6] text-[#4B5563] border border-transparent"
};

export function Tag({
  variant = "neutral",
  className = "",
  ...props
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
