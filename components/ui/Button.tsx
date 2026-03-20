import { forwardRef, type ButtonHTMLAttributes } from "react";
import { componentClasses } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: componentClasses.buttonPrimary,
  accent: componentClasses.buttonAccent,
  secondary: componentClasses.buttonSecondary,
  ghost: "hover:bg-muted font-medium rounded-lg px-4 py-2 transition-colors",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
