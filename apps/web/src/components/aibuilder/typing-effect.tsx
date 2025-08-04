"use client";

import { useEffect, useState } from "react";

const examples = [
  "job board",
  "SaaS dashboard",
  "e-commerce site",
  "blog platform",
  "social network",
  "AI chatbot",
  "portfolio site",
  "marketplace app",
  "learning platform",
  "productivity tool",
];

export function TypingEffect() {
  const [currentExample, setCurrentExample] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const example = examples[currentExample];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < example.length) {
            setCurrentText(example.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentExample((prev) => (prev + 1) % examples.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentExample, isDeleting]);

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse font-light">|</span>
    </span>
  );
}
