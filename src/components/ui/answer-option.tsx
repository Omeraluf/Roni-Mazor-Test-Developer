"use client";

import { ButtonHTMLAttributes } from "react";

type AnswerState = "default" | "selected" | "correct" | "incorrect";

interface AnswerOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: AnswerState;
  label?: string; // א / ב / ג / ד
  text: string;
}

const baseClasses =
  "w-full flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm text-right transition text-[#111827] disabled:opacity-50 disabled:cursor-not-allowed";

const stateClasses: Record<AnswerState, string> = {
  default: "bg-white border-[#E5E7EB] hover:bg-[#F9FAFB]",
  selected: "bg-[#F4E5F0] border-[#C19BB8]",
  correct: "bg-[#E1FCE5] border-[#16A34A]",
  incorrect: "bg-[#FEE2E2] border-[#EF4444]",
};

export function AnswerOption({
  state = "default",
  label,
  text,
  className = "",
  disabled = false,
  ...props
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseClasses} ${stateClasses[state]} ${className}`}
      {...props}
    >
      <span className="flex-1 text-right">{text}</span>
      {label && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold">
          {label}
        </span>
      )}
    </button>
  );
}
