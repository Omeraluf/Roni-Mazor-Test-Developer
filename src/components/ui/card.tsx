import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
}

const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7"
};

export function Card({
  padding = "md",
  hoverable = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-3xl bg-white shadow-sm border border-[#EAECF0]",
        paddingClasses[padding],
        hoverable
          ? "transition hover:shadow-md hover:-translate-y-0.5"
          : "",
        className
      ].join(" ")}
      {...props}
    />
  );
}
