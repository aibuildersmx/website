"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FAQSection } from "@/components/homepage/faq-section";
import { WhatWeDoSection } from "@/components/homepage/what-we-do-section";
import { TeamSection } from "@/components/homepage/team-section";
import { EventsSection } from "@/components/homepage/events-section";
import { CTASection } from "@/components/homepage/cta-section";

export default function Home() {
  return (
    <main>
      <Section
        className="min-h-screen flex items-center justify-center"
        containerClassName="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
      >
        <div>
          <h1 className="text-4xl font-light tracking-tight sm:text-6xl mb-6 font-serif">
            La Primer Comunidad de AI en México
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Somos una comunidad de builders que transformamos ideas en productos
            digitales reales usando IA como nuestro superpoder.
          </p>
          <Button size="lg" asChild animated>
            <a
              href="https://chat.whatsapp.com/EiadTAJlAyrJI5EI5bPF3t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete a nuestra comunidad
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/hero1.jpg"
            alt="Estudiantes programando juntos"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
            priority
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <Image
            src="/images/hero2.jpg"
            alt="Aprendiendo con IA"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
            priority
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <Image
            src="/images/hero3.jpg"
            alt="Aprendizaje colaborativo"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <Image
            src="/images/hero4.jpg"
            alt="Aprendizaje colaborativo"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </Section>

      <WhatWeDoSection />
      <EventsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
