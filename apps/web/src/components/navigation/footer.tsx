"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  LinkIcon,
  MessageCircle,
  Twitter,
  X,
} from "lucide-react";
import { Copyright } from "../aibuilder/copyright";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-fit">
            <h3 className="mb-4 text-lg font-semibold">AI Builders México</h3>
            <p className="text-sm text-muted-foreground">
              Community, workshops, and events for Mexico City&apos;s AI
              ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://aibuilders.mx"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <LinkIcon className="h-3 w-3" />
                    aibuilders.mx
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://chat.whatsapp.com/E7oCGyITLkX1aqFexJbbHm"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <MessageCircle className="h-3 w-3" />
                    WhatsApp Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/aibuildersmx"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <Github className="h-3 w-3" />
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Created By</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3 mt-1 items-center">
                  <p className="text-muted-foreground">Javier Rivero</p>
                  <a
                    href="https://www.linkedin.com/in/javierriveroe/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3 w-3" />
                  </a>
                  <a
                    href="https://x.com/_javierivero"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-3 w-3" />
                  </a>
                </div>
                <div className="flex gap-3 mt-1 items-center">
                  <p className="text-muted-foreground">Ben Kim</p>
                  <a
                    href="https://www.linkedin.com/in/benkimbuilds/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3 w-3" />
                  </a>
                  <a
                    href="https://x.com/benkimbuilds"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export function FooterMinified() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Copyright />
          <div className="flex items-center gap-4">
            <Link
              href="https://aibuilders.mx"
              className="hover:text-foreground transition-colors"
            >
              aibuilders.mx
            </Link>
            <Link
              href="https://chat.whatsapp.com/E7oCGyITLkX1aqFexJbbHm"
              className="hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/aibuildersmx"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FooterWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? <Footer /> : <FooterMinified />;
}
