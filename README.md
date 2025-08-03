# Tutorial - AI-First Development Starter

A production-ready fullstack template optimized for AI-assisted development with Cursor. Features a modern tech stack, pre-configured authentication, and comprehensive component library.

## 🚀 Features

- **Production-Ready Setup**: Authentication, database, and design system pre-configured
- **AI-Optimized**: Built specifically for development with Cursor AI
- **Component Library**: Full shadcn/ui component showcase with interactive examples
- **Dark Mode**: Built-in theme switching with system preference support
- **Interactive Examples**: Working demos including games and creative tools
- **Comprehensive Documentation**: Step-by-step setup guide and best practices

## Structure

- `apps/web` - Next.js 15 web application with App Router
- `apps/supabase` - Supabase local development and migrations

## Tech Stack

- **Framework**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand
- **Authentication**: Clerk (user management & auth)
- **Database**: Supabase (PostgreSQL)
- **Build System**: Turborepo monorepo, pnpm workspaces
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env.local` in `apps/web/`
   - Add your Clerk keys (publishable & secret)
   - Add your Supabase URL and anon key

3. Start the database:

   ```bash
   pnpm db:start  # Start local Supabase
   pnpm db:push   # Apply migrations
   ```

4. Start development:
   ```bash
   pnpm dev  # Runs all apps
   ```

## Commands

### Development

- `pnpm dev` - Start all apps in development
- `pnpm dev:web` - Start only the web app
- `pnpm dev:db` - Start only Supabase

### Build & Deploy

- `pnpm build` - Build all apps for production
- `pnpm lint` - Run ESLint across the monorepo
- `pnpm type-check` - TypeScript type checking

### Database

- `pnpm db:start` - Start local Supabase
- `pnpm db:stop` - Stop local Supabase
- `pnpm db:reset` - Reset database to initial state
- `pnpm db:push` - Apply pending migrations

### Package Management

- `pnpm --filter web add <package>` - Add dependency to web app
- `pnpm --filter supabase add <package>` - Add dependency to supabase app

## Project Structure

```
tutorial/
├── apps/
│   ├── web/                 # Next.js application
│   │   ├── src/
│   │   │   ├── app/         # App router pages & API routes
│   │   │   │   ├── design-library/  # Component showcase
│   │   │   │   ├── examples/        # Interactive demos
│   │   │   │   └── getting-started/ # Setup guide
│   │   │   ├── components/  # React components
│   │   │   │   └── ui/      # shadcn/ui components
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   ├── lib/         # Utilities & configs
│   │   │   └── store/       # Zustand state management
│   │   └── public/          # Static assets
│   └── supabase/            # Database & backend
│       └── supabase/
│           └── migrations/  # SQL migrations
├── package.json             # Root package.json
├── pnpm-workspace.yaml      # pnpm workspace config
└── turbo.json               # Turborepo config
```

## Pages & Features

### 🏠 Home Page

- Modern landing page with gradient effects
- Feature highlights and quick start guide
- Links to documentation and component library

### 📚 Getting Started (`/getting-started`)

- Comprehensive setup guide with tabs for different setups
- Environment variable configuration
- Troubleshooting tips and FAQs
- Prerequisites and system requirements

### 🎨 Design Library (`/design-library`)

- Complete shadcn/ui component showcase
- Interactive component demos with code examples
- Copy-to-clipboard functionality
- Components include: Buttons, Cards, Forms, Dialogs, and more

### 🎮 Examples (`/examples`)

- Interactive demos showcasing real implementations:
  - Memory Card Game
  - Pomodoro Timer
  - Color Palette Generator
  - Drum Machine
  - Drawing Canvas
- Each example includes full source code
