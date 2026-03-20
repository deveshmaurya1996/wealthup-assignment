import { forwardRef, type InputHTMLAttributes } from "react";
import { componentClasses } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          componentClasses.input,
          error && "border-error focus:ring-error",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
