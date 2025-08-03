import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Learn by Coding This Site
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          This website is your training ground. Clone the repo, open it in
          Cursor, and transform it into your own application. Everything you
          need is already set up!
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link href="/getting-started">
            <Button size="lg" className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/design-library">
            <Button size="lg" variant="outline">
              Explore Examples
            </Button>
          </Link>
        </div>
        <div className="mt-12 p-6 bg-muted/50 rounded-lg max-w-2xl mx-auto">
          <h2 className="font-semibold text-lg mb-2">How It Works</h2>
          <p className="text-sm text-muted-foreground">
            This isn&apos;t just a tutorial site - it&apos;s your starter code.
            Clone this repo, open it in Cursor, and you&apos;ll have a fully
            functional web app with authentication, database, and modern UI
            components. Follow the guides to understand each part, then use
            Cursor&apos;s AI to transform it into your own project.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg">Ready-to-Use Template</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Next.js, Supabase, Clerk auth - all configured and working
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Learn from Real Code</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Study this site&apos;s source to understand modern patterns
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Build Your Own</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use Cursor AI to modify and extend into your unique app
            </p>
          </div>
        </div>
        <div className="mt-24 mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            ⚡ entire site and repository vibe coded using Cursor
          </p>
        </div>
      </div>
    </main>
  );
}
