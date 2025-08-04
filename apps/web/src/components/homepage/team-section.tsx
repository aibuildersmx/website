import Image from "next/image";
import { Section } from "@/components/ui/section";

export function TeamSection() {
  return (
    <Section id="instructors" className="py-20" variant="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 font-serif">¿Quiénes somos?</h2>
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
              sizes="(max-width: 768px) 200px, 300px"
              loading="lazy"
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
              sizes="(max-width: 768px) 200px, 300px"
              loading="lazy"
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
  );
}
