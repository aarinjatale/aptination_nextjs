"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // AptiNation style: white bg, black text, rounded-3xl, border, consistent padding
          "h-12 w-full rounded-3xl border border-gray-300 bg-white px-5 py-3 text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
