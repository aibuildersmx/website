import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className,
  variant = "default",
  containerClassName,
}: SectionProps) {
  const variantStyles = {
    default: "bg-background",
    muted: "bg-secondary",
  };

  return (
    <section
      id={id}
      className={cn("py-20 sm:py-32", variantStyles[variant], className)}
    >
      <div
        className={cn("container mx-auto px-4 max-w-6xl", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
