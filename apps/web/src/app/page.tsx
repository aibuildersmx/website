"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { WorkshopCard } from "@/components/workshop-card";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  const [activeStep, setActiveStep] = useState("1");

  const stepContent = {
    "1": {
      title: "Workshops de Cursor, Lovable y v0",
      description:
        "Talleres especializados donde aprendes a usar las herramientas de IA más avanzadas para crear prototipos y web apps sin conocimiento previo de código. Ideal para product managers, diseñadores y founders.",
      image: "/images/workshop1.jpg",
    },
    "2": {
      title: "Vibe Coding Coworking Sessions",
      description:
        "Sesiones colaborativas donde builders se reúnen para compartir conocimientos y construir productos digitales en un ambiente dinámico y motivador.",
      image: "/images/workshop2.jpg",
    },
    "3": {
      title: "Meetups Oficiales de Cursor",
      description:
        "Eventos exclusivos donde compartimos best practices y creamos espacios para conectar con otros profesionales del ecosistema tech mexicano.",
      image: "/images/workshop3.jpg",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".step-section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          const id = section.getAttribute("data-step");
          if (id) setActiveStep(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Button size="lg" asChild>
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
          />
          <Image
            src="/images/hero2.jpg"
            alt="Aprendiendo con IA"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
          />
          <Image
            src="/images/hero3.jpg"
            alt="Aprendizaje colaborativo"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
          />
          <Image
            src="/images/hero4.jpg"
            alt="Aprendizaje colaborativo"
            width={300}
            height={300}
            className="rounded-lg object-cover aspect-square w-full hover:scale-105 transition-all duration-500"
          />
        </div>
      </Section>

      {/* What We Do Section */}
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
              className={`flex items-start gap-6 transition-opacity duration-500 ${
                activeStep === "1" ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0">
                1
              </div>
              <div>
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
            />
          </div>
          <div>
            <div
              className={`flex items-start gap-6 transition-opacity duration-500 ${
                activeStep === "2" ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0">
                2
              </div>
              <div>
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
              className={`flex items-start gap-6 transition-opacity duration-500 ${
                activeStep === "3" ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold shrink-0">
                3
              </div>
              <div>
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
            />
          </div>
        </div>
      </Section>

      {/* Events Section */}
      <Section id="events">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Nuestros Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestros talleres presenciales y virtuales donde aprenderás
            a programar con IA en sesiones intensivas y prácticas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Upcoming Events */}
          <WorkshopCard
            month="SEPT"
            day="11"
            title="From Idea to MVP: Construye tu prototipo con AI"
            location="Ciudad de México, Presencial"
            spotsAvailable={19}
            description="Dirigido a Product Managers, Diseñadores y Builders que quieren acelerar su proceso de desarrollo sin necesidad de programación avanzada."
            price="$899 MXN"
            link="https://lu.ma/r8rwqnn9"
          />

          <WorkshopCard
            month="OCT"
            day="9"
            title="Vibe Coding Coworking Session"
            location="Ciudad de México, Presencial"
            spotsAvailable={10}
            description="Sesiones de coworking donde builders se reúnen para trabajar en sus proyectos, compartir conocimientos y colaborar en un ambiente motivador"
            price="FREE"
            buttonText="Coming soon"
            buttonDisabled={true}
          />

          <WorkshopCard
            month="OCT"
            day="22"
            title="Cursor Meetup #2"
            location="Ciudad de México, Presencial"
            spotsAvailable={160}
            description="Segundo meetup oficial de Cursor en México"
            price="FREE"
            buttonText="Coming Soon"
            buttonDisabled={true}
          />

          {/* Past Event */}
          <WorkshopCard
            month="JUL"
            day="31"
            title="Cursor Meetup"
            location="CDMX, Presencial"
            spotsAvailable={0}
            description="Primer meetup oficial de Cursor en México. Más de 100 asistentes, para acceder a la grabación revisa el grupo de WhatsApp"
            price="Evento completado"
            badgeText="Completado"
            badgeVariant="secondary"
            isCompleted={true}
            buttonDisabled={true}
            buttonText="Completado"
          />
        </div>
      </Section>

      {/* Team Section */}
      <Section id="instructors" className="py-20" variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            ¿Quiénes somos?
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div
            className="group cursor-pointer overflow-hidden flex flex-col items-center"
            onClick={() => window.open("https://javierivero.com", "_blank")}
          >
            <div className="relative h-[200px] md:h-[300px] w-[200px] md:w-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/javier.jpg"
                alt="Javier Rivero"
                fill
                className="aspect-square rounded-lg object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[0.95]"
              />
            </div>
            <div className="pt-4 px-2">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-base font-medium tracking-normal transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                  Javier Rivero
                </h3>
                <span className="text-xs text-muted-foreground">_01</span>
              </div>
              <p className="text-sm text-muted-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Co-Founder (Official Cursor Ambassador)
              </p>
            </div>
          </div>
          <div
            className="group cursor-pointer overflow-hidden flex flex-col items-center"
            onClick={() => window.open("https://x.com/benkimbuilds", "_blank")}
          >
            <div className="relative h-[200px] md:h-[300px] w-[200px] md:w-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/ben.jpg"
                alt="Ben Kim"
                fill
                className="aspect-square rounded-lg object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[0.95]"
              />
            </div>
            <div className="pt-4 px-2">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-base font-medium tracking-normal transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                  Ben Kim
                </h3>
                <span className="text-xs text-muted-foreground">_02</span>
              </div>
              <p className="text-sm text-muted-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Co-Founder (Official Cursor Ambassador)
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <FAQSection />

      {/* CTA Section */}
      <Section className="py-20" variant="muted">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            ¿Listo para construir con IA?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a nuestra comunidad donde serás el primero en enterarte de
            <br />
            nuestros eventos y talleres
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/EiadTAJlAyrJI5EI5bPF3t",
                "_blank"
              )
            }
          >
            Únete a la comunidad
          </Button>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
              ¿Quieres probar a construir algo con IA?
            </h3>
            <Button size="lg" asChild variant="outline">
              <a
                href="https://learn.aibuilders.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Empieza ahora en learn.aibuilders.mx
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
