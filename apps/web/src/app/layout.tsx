import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation/navigation";
import { FooterWrapper } from "@/components/navigation/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutorial",
  description: "Tutorial Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1 pt-14">{children}</main>
              <FooterWrapper />
            </div>
          </Providers>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
