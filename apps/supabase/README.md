# Supabase Local Development

This app manages the Supabase local development environment and migrations.

## Setup

1. Install the Supabase CLI
2. Create a `.env` file with your remote Supabase credentials:

```
SUPABASE_PROJECT_ID=your-project-id
SUPABASE_DB_PASSWORD=your-db-password
SUPABASE_ACCESS_TOKEN=your-access-token
```

## Commands

- `pnpm db:start` - Start local Supabase
- `pnpm db:stop` - Stop local Supabase
- `pnpm db:reset` - Reset local database
- `pnpm db:push` - Push migrations to remote
- `pnpm db:pull` - Pull schema from remote
- `pnpm migration:new <name>` - Create new migration
- `pnpm migration:up` - Apply pending migrations
