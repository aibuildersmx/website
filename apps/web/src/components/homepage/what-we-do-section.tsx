"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";

const stepContent = {
  "1": {
    title: "Aprende los Fundamentos",
    description:
      "Domina las herramientas de IA más avanzadas como Cursor, v0, y Claude. Aprende a pensar como un programador sin escribir código desde cero.",
    image: "/images/workshop1.jpg",
  },
  "2": {
    title: "Construye Proyectos Reales",
    description:
      "Desarrolla aplicaciones web completas, automatizaciones y prototipos funcionales. Desde landing pages hasta aplicaciones complejas con bases de datos.",
    image: "/images/workshop2.jpg",
  },
  "3": {
    title: "Únete a la Comunidad",
    description:
      "Conecta con otros builders, comparte proyectos y colabora en iniciativas. Accede a mentorías personalizadas y oportunidades laborales.",
    image: "/images/workshop3.jpg",
  },
};

export function WhatWeDoSection() {
  const [activeStep, setActiveStep] = useState<string>("1");

  useEffect(() => {
    const handleScroll = () => {
      const stepSections = document.querySelectorAll(".step-section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const absoluteBottom = absoluteTop + rect.height;

        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
          const step = section.getAttribute("data-step");
          if (step) setActiveStep(step);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="py-20" variant="muted" id="learn">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light mb-4 font-serif">¿Qué Hacemos?</h2>
      </div>

      {/* Step 1 */}
      <div
        className="step-section grid gap-12 lg:grid-cols-2 items-center mb-32"
        data-step="1"
      >
        <div className="order-2 lg:order-1">
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-opacity duration-500 ${
              activeStep === "1" ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0 mx-auto sm:mx-0">
              1
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                {stepContent["1"].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {stepContent["1"].description}
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src={stepContent["1"].image}
            alt={stepContent["1"].title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Step 2 */}
      <div
        className="step-section grid gap-12 lg:grid-cols-2 items-center mb-32"
        data-step="2"
      >
        <div>
          <Image
            src={stepContent["2"].image}
            alt={stepContent["2"].title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
        <div>
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-opacity duration-500 ${
              activeStep === "2" ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0 mx-auto sm:mx-0">
              2
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                {stepContent["2"].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {stepContent["2"].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div
        className="step-section grid gap-12 lg:grid-cols-2 items-center"
        data-step="3"
      >
        <div className="order-2 lg:order-1">
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-opacity duration-500 ${
              activeStep === "3" ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0 mx-auto sm:mx-0">
              3
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                {stepContent["3"].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {stepContent["3"].description}
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src={stepContent["3"].image}
            alt={stepContent["3"].title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
