# Job Board Monorepo

A modern job board application built with TypeScript, Next.js, and Supabase.

## Structure

- `apps/web` - Next.js web application
- `apps/supabase` - Supabase local development and migrations

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Authentication**: Clerk
- **Database**: Supabase
- **Build System**: Turborepo, pnpm

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
   - Copy `apps/web/.env.example` to `apps/web/.env.local`
   - Add your Clerk and Supabase credentials

3. Start development:
```bash
pnpm dev
```

## Commands

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all apps
- `pnpm type-check` - Type check all apps