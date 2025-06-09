---
trigger: model_decision
description: When working on anything having to do with the structure of the project
---

# CAINAM Project Structure for Windsurf AI Agent (Concise)

## General Code Style & Formatting (Guidelines)
- **Paradigm**: Functional & declarative (React Hooks on frontend), modular services on backend.
- **DRY**: Use shared packages (`types`), reusable components/functions.
- **Naming**: Descriptive (e.g., `isLoading`). Verb-noun for functions.
- **File Structure (Web - `packages/web/src`)**: Next.js App Router (`app/`), components (`components/`), utilities (`lib/`).
- **File Structure (API - `packages/api/src`)**: Controllers (`controllers/`), Data Access (`dal/`), Routes (`routes/`), Services (`services/`).
- **TypeScript**: Strict usage across all packages.
- **Key Tech Docs**: Refer to official docs for Next.js, Express, Prisma, Turborepo.

## CAINAM Project Structure Overview

### 1. High-Level Architecture
- **Monorepo**: PNPM Workspaces (`pnpm-workspace.yaml`) for multi-package management.
- **Build System**: Turborepo (`turbo.json`) for build orchestration & caching.
- **Root Files**:
    - `package.json`: Root dev dependencies, scripts delegating to Turborepo.
    - `tsconfig.json`: Base TypeScript configuration.

### 2. Core Packages (`packages/`)

    a. **`api` (Backend API)**
        - **Purpose**: RESTful API for business logic, data persistence, authentication.
        - **Tech**: Node.js, Express.js, Prisma (ORM), TypeScript.
        - **Key Dirs**:
            - `src/app.ts`: Express app setup (middleware, routes).
            - `src/server.ts`: HTTP server start.
            - `src/controllers/`: Request/response handlers (clients, portfolios, assets).
            - `src/dal/`: Data Access Layer using Prisma (clientDal, portfolioDal).
            - `src/routes/`: API route definitions.
            - `src/auth/authMiddleware.ts`: JWT authentication.
            - `prisma/schema.prisma`: Database models (SQLite).
        - **Auth**: Auth0 (via `express-openid-connect` for login, JWT for API access).

    b. **`web` (Frontend Application)**
        - **Purpose**: User interface for client interaction.
        - **Tech**: Next.js (App Router), React, TypeScript, Tailwind CSS.
        - **Key Dirs**:
            - `src/app/`: Pages and layouts (e.g., `layout.tsx`, `page.tsx`).
            - `src/app/api/`: Next.js API routes (e.g., `auth/[auth0]`, `ollama-proxy`).
            - `src/components/`: UI components (general & `ui/` for Shadcn).
            - `src/lib/`: Utilities, Auth0 client setup.
            - `src/hooks/`: Custom React hooks.
        - **Auth**: `@auth0/nextjs-auth0`.

    c. **`types` (Shared Definitions)**
        - **Purpose**: Centralized TypeScript interfaces/types (`@highwater/types`) for data consistency between `api` and `web`.
        - **Key Files**: `src/index.ts` exports all shared types.

### 3. Key Dependencies & Interactions
- **Shared Types**: `api` and `web` depend on `types`.
- **API Consumption**: `web` fetches data from `api`.
- **External APIs**: `api` (placeholder for Plaid), `web` (proxies to Ollama).

### 4. Core Configuration Points
- **Environment Vars**: `.env` files in `api` and `web` (DB URLs, Auth0 credentials, API keys, JWT secrets).
- **Turborepo**: `turbo.json` (pipeline definition: `build`, `dev`, `test`, `lint`).
- **PNPM**: `pnpm-workspace.yaml` (defines workspaces).
- **TypeScript**: Root `tsconfig.json` and per-package `tsconfig.json` files.
- **API Database**: `packages/api/prisma/schema.prisma`.
- **Next.js Config**: `packages/web/next.config.mjs`.
- **Package Scripts**: Defined in individual `package.json` files, orchestrated by Turborepo.

### 5. Data Flow Summary
1. User interacts with **`web`** (Next.js).
2. **`web`** makes requests to **`api`** (Express.js) or its own API routes (e.g., `ollama-proxy`).
3. **`api`** controllers use DALs (Prisma) to interact with the database.
4. Data (using shared **`types`**) flows back to **`web`** for display.

### 6. Development & Build Commands (Root)
- `pnpm turbo dev`: Start all dev servers.
- `pnpm turbo build`: Build all packages.
- `pnpm turbo test`: Run tests.
- `pnpm turbo lint`: Run linters.