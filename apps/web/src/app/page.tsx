import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Rocket, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/5 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20">
                Built with Next.js 15 + Supabase + Clerk + Cursor AI
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Get started and vibe code with AI
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto">
              Clone this production-ready template. Learn by exploring real
              code. Transform it into your own app with Cursor AI.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/getting-started">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/design-library">
                <Button size="lg" variant="ghost" className="gap-2">
                  View Components
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Code2 className="h-5 w-5 text-primary" />
                  Production Ready
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Authentication, database, and design system pre-configured.
                    Start vibe coding your ideas immediately.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Learn by Example
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Every component is documented. Have AI understand the
                    patterns, then make them your own.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Rocket className="h-5 w-5 text-primary" />
                  AI-First Development
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Optimized for Cursor. Let AI help you customize and extend
                    your application.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto mt-32 max-w-2xl">
            <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <h2 className="text-2xl font-bold tracking-tight">
                Start in 3 steps
              </h2>
              <ol className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">1.</span>
                  Clone the repository and install dependencies
                </li>
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">2.</span>
                  Open in Cursor and explore the codebase
                </li>
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">3.</span>
                  Start building your own features with AI assistance
                </li>
              </ol>
              <div className="mt-8">
                <Link href="/getting-started">
                  <Button className="w-full" variant="outline">
                    View Setup Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="text-center">
              <Github className="mx-auto h-8 w-8 text-muted-foreground" />
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Open Source
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Clone the repository and start building today
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a
                  href="https://github.com/benjaminykim/tutorial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
                <code className="rounded bg-muted px-3 py-1 text-sm font-mono">
                  git clone https://github.com/benjaminykim/tutorial.git
                </code>
              </div>
            </div>
          </div>

          <div className="mt-24 mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              proof is in the pudding: ⚡ vibe coded with Cursor on a Saturday
              afternoon
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-primary/5 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </main>
  );
}
