"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    id: "item-1",
    question: "¿Qué es AI Builders Mexico?",
    answer:
      "Somos la primera comunidad de builders de IA en México. Organizamos workshops, sesiones de coworking y meetups donde aprendes a usar herramientas como Cursor, Lovable y v0 para crear productos digitales reales.",
  },
  {
    id: "item-2",
    question: "¿Necesito saber programar para participar?",
    answer:
      "¡No! Nuestros workshops están diseñados específicamente para personas sin conocimiento de código. Te enseñamos a usar herramientas de IA que hacen la programación accesible para todos.",
  },
  {
    id: "item-3",
    question: "¿Qué son las Vibe Coding Sessions?",
    answer:
      "Son sesiones de coworking donde builders se reúnen para trabajar en sus proyectos, compartir conocimientos y colaborar en un ambiente dinámico. Perfecto para mantener el momentum y conocer a otros creadores.",
  },
  {
    id: "item-4",
    question: "¿Dónde se realizan los eventos?",
    answer:
      "Organizamos eventos presenciales en Ciudad de México, Guadalajara y Monterrey, así como workshops virtuales. También tenemos meetups oficiales de Cursor en diferentes ciudades.",
  },
  {
    id: "item-5",
    question: "¿Qué herramientas voy a aprender?",
    answer:
      "Te enseñamos a dominar Cursor, Lovable y v0 - las herramientas de IA más avanzadas para crear prototipos y aplicaciones web sin escribir código desde cero.",
  },
  {
    id: "item-6",
    question: "¿Cómo me uno a la comunidad?",
    answer:
      "Puedes unirte gratis a nuestra comunidad de WhatsApp usando el enlace en la página. Para workshops y eventos, inscríbete a través de los botones correspondientes.",
  },
];

export function FAQSection() {
  return (
    <Section id="faqs" className="py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Preguntas
            <br />
            Frecuentes
          </h2>
          <p className="text-muted-foreground">
            Todo lo que quieres saber sobre Código con IA.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-sans">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
