"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: "/#learn",
      label: "¿Qué Hacemos?",
    },
    {
      href: "/#events",
      label: "Nuestros Eventos",
    },
    {
      href: "/#instructors",
      label: "¿Quiénes somos?",
    },
    {
      href: "/#faqs",
      label: "Preguntas Frecuentes",
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="AI Builders Mexico"
            width={100}
            height={100}
            className="dark:invert"
          />
        </Link>

        {isMobile ? (
          <>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-6">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-foreground/80",
                          pathname === route.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <a
                      href="https://chat.whatsapp.com/EiadTAJlAyrJI5EI5bPF3t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4"
                    >
                      <Button className="w-full" animated>
                        Únete a la comunidad
                      </Button>
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </>
        ) : (
          <>
            <nav className="ml-8 flex items-center space-x-6 text-sm font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === route.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-4">
              <a
                href="https://chat.whatsapp.com/EiadTAJlAyrJI5EI5bPF3t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Únete a la comunidad</Button>
              </a>
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
