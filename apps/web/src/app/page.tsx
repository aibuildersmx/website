import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Tutorial Site</h1>
      <p className="mt-4 text-lg text-muted-foreground">Create a site</p>
      <Button asChild className="mt-6">
        <Link href="/components-test">See UI Components</Link>
      </Button>
    </main>
  );
}
