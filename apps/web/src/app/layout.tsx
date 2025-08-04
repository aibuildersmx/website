import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation/navigation";
import { FooterWrapper } from "@/components/navigation/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Builders México",
  description:
    "Community, workshops, and events for Mexico City's AI ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
