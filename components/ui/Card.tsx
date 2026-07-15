"use client";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 ${
        hover
          ? "transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,93,78,0.35)]"
          : ""
      } ${className}`}
      style={{
        border: "1px solid rgba(197, 200, 190, 0.7)",
      }}
      {...props}
    />
  );
}

