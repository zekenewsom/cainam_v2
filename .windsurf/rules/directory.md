---
trigger: model_decision
description: Use to understand the directory structure of the program
---

└── zekenewsom-cainam_v2/
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── test-ollama.js
    ├── tsconfig.json
    ├── turbo.json
    ├── packages/
    │   ├── api/
    │   │   ├── jest.config.js
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── tsconfig.test.json
    │   │   ├── prisma/
    │   │   │   ├── schema.prisma
    │   │   │   └── migrations/
    │   │   │       ├── migration_lock.toml
    │   │   │       └── 20250502184059_init/
    │   │   │           └── migration.sql
    │   │   ├── src/
    │   │   │   ├── app.ts
    │   │   │   ├── server.ts
    │   │   │   ├── auth/
    │   │   │   │   └── authMiddleware.ts
    │   │   │   ├── config/
    │   │   │   │   └── swagger.ts
    │   │   │   ├── controllers/
    │   │   │   │   ├── assetsController.ts
    │   │   │   │   ├── clientsController.ts
    │   │   │   │   └── portfoliosController.ts
    │   │   │   ├── dal/
    │   │   │   │   ├── assetDal.ts
    │   │   │   │   ├── clientsDal.ts  # (Note: name from your provided tree)
    │   │   │   │   └── portfoliosDal.ts # (Note: name from your provided tree)
    │   │   │   ├── generated/prisma/ # (Auto-generated Prisma client files)
    │   │   │   ├── routes/
    │   │   │   │   ├── assets.ts
    │   │   │   │   ├── clients.ts
    │   │   │   │   ├── compliance.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── portfolios.ts
    │   │   │   │   └── risk.ts
    │   │   │   ├── services/
    │   │   │   │   └── assetService.ts
    │   │   │   └── utils/
    │   │   │       └── logger.ts
    │   │   └── tests/
    │   │       ├── assets.test.ts
    │   │       ├── clients.test.ts
    │   │       ├── compliance.test.ts
    │   │       ├── portfolios.test.ts
    │   │       └── risk.test.ts
    │   ├── types/
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── asset.ts
    │   │       ├── client.ts
    │   │       ├── compliance.ts
    │   │       ├── index.ts
    │   │       ├── portfolio.ts
    │   │       ├── risk.ts
    │   │       └── user.ts
    │   └── web/
    │       ├── README.md
    │       ├── eslint.config.mjs
    │       ├── next.config.ts
    │       ├── package.json
    │       ├── postcss.config.mjs
    │       ├── tailwind.config.js
    │       ├── tsconfig.json
    │       ├── public/
    │       │   └── logos/ # (Example static assets)
    │       └── src/
    │           ├── index.css
    │           ├── app/
    │           │   ├── globals.css
    │           │   ├── layout.tsx
    │           │   ├── page.tsx  # (Main dashboard page)
    │           │   ├── api/
    │           │   │   ├── auth/[...auth0]/route.ts
    │           │   │   └── ollama-proxy/route.ts
    │           │   ├── ask/
    │           │   │   └── page.tsx
    │           │   ├── insights/
    │           │   │   └── page.tsx
    │           │   ├── portfolio/
    │           │   │   └── page.tsx
    │           │   ├── settings/
    │           │   │   └── page.tsx
    │           │   └── taxes/
    │           │       ├── page.tsx
    │           │       └── ResourceCard.tsx
    │           ├── components/
    │           │   ├── ActivityTable.tsx
    │           │   ├── AddButtonWithDropdown.test.tsx
    │           │   ├── AddButtonWithDropdown.tsx
    │           │   ├── AIInsights.tsx
    │           │   ├── Alerts.tsx
    │           │   ├── AllocationBreakdown.tsx
    │           │   ├── AuthNav.tsx
    │           │   ├── EstimatedMiscIncome.tsx
    │           │   ├── GainLossAnalysis.tsx
    │           │   ├── HoldingsTable.tsx
    │           │   ├── MarketSignals.tsx
    │           │   ├── NavBar.tsx
    │           │   ├── NetWorthOverview.tsx
    │           │   ├── NewsFeed.tsx
    │           │   ├── OnChainTrends.tsx
    │           │   ├── PerformanceComparisonChart.tsx
    │           │   ├── PortfolioActivityChart.tsx
    │           │   ├── RecentTrades.tsx
    │           │   ├── RiskComplianceFlags.tsx
    │           │   └── TransactionSummaryTable.tsx
    │           ├── contexts/
    │           │   └── AuthContext.tsx
    │           └── data/
    │               └── mockDashboard.ts