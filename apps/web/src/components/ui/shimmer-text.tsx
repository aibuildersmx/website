"use client";

import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  colors?: {
    from?: string;
    via?: string;
    to?: string;
  };
}

export function ShimmerText({
  children,
  className,
  duration = 4,
  colors = {
    from: "from-primary",
    via: "via-primary/70",
    to: "to-primary/40",
  },
}: ShimmerTextProps) {
  const shimmerStyle: CSSProperties = {
    backgroundSize: "200% 100%",
    backgroundPosition: "0% 0%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `shimmer ${duration}s linear infinite`,
  };

  return (
    <>
      <span
        className={cn(
          "relative inline-block bg-clip-text text-transparent bg-gradient-to-r",
          colors.from,
          colors.via,
          colors.to,
          className
        )}
        style={shimmerStyle}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
}
