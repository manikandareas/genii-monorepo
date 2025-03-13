# Genii Monorepo

A monorepo application for digital courses based on generative AI, optimizing content personalization through AI agents to increase learning motivation.

## Tech Stack

### General
- Turborepo
- TypeScript
- Node.js
- Vercel

### Frontend
- Next.js 15 (App Router)
- shadcn/ui
- TailwindCSS 4
- React
- TypeScript

### Backend
- NestJS
- Neon Database
- TypeScript
- Drizzle ORM
- PostgreSQL
- Langchain
- Gemini
- Cloudflare R2

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

## Project Structure

```
genii-monorepo/
├── apps/
│   ├── client/           # Next.js Client Frontend
│   ├── admin/            # Next.js Admin Dashboard
│   └── api/              # NestJS Backend
├── packages/
│   ├── database/         # Drizzle ORM setup
│   ├── dto/              # Data Transfer Objects
│   ├── api-client/       # API Client with React Query
│   ├── ui/               # Shared UI components
│   └── tsconfig/         # Shared TypeScript configs
```

## License

ISC
