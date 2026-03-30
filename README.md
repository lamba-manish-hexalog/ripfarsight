# RipFarSight (RFS)

**HR Management Platform** | VectorNexus[Beta] | Hexalog

A modern, self-hosted HR system covering attendance, leave management, payroll, and expense claims.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + TailwindCSS + Vite |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL (via Prisma ORM) |
| Auth | JWT (access token) + HttpOnly cookie (refresh token) |
| Email | Gmail SMTP via Nodemailer |
| Deploy | Nginx + PM2 + HTTPS |

---

## Local Development Setup

### Prerequisites
- Node.js >= 20
- PostgreSQL running locally
- Redis running locally

### 1. Clone and install
```bash
git clone https://github.com/lamba-manish-hexalog/ripfarsight.git
cd ripfarsight
npm run install:all
```

### 2. Configure environment
```bash
cp .env.example backend/.env
# Edit backend/.env with your local DB credentials and secrets
```

### 3. Setup database
```bash
cd backend
npm run db:generate
npm run db:migrate
npm run db:seed
cd ..
```

### 4. Start development servers
```bash
npm run dev
# Frontend: http://localhost:5173
# Backend API: http://localhost:4000
# Health: http://localhost:4000/health
```

---

## Project Structure

```
ripfarsight/
├── frontend/                # React + TypeScript + Tailwind
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── services/        # axios API client
│       ├── store/           # Zustand
│       ├── types/
│       └── utils/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/      # auth, RBAC, error handler
│   │   └── utils/           # email, PDF helpers
│   └── prisma/
│       ├── schema.prisma
│       └── seed.ts
├── .env.example
├── ecosystem.config.js      # PM2 config
├── deploy.sh
└── README.md
```

---

## Linear Epic
[HEX-730 — Infrastructure & Setup](https://linear.app/hexalog-technologies/issue/HEX-730)

## Branch Naming
`hex-[ticket-id]/[feature-slug]`

## PR Format
`[HEX-XXX] Short description`

---
*Managed by VectorNexus[Beta] — Hexalog AI SDLC Orchestration*
