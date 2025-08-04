import { Section } from "@/components/ui/section";
import { WorkshopCard } from "@/components/homepage/workshop-card";

export function EventsSection() {
  return (
    <Section id="events">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 font-serif">Nuestros Eventos</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Únete a nuestros talleres presenciales y virtuales donde aprenderás a
          programar con IA en sesiones intensivas y prácticas.
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
  );
}
