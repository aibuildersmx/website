import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
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
  );
}
