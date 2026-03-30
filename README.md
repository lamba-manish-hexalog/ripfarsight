# RipFarSight (RFS)

**HR Management Platform** | VectorNexus[Beta] | Hexalog

A modern, self-hosted HR system covering attendance, leave management, payroll, and expense claims — fully containerized with Docker.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + TailwindCSS + Vite (served via Nginx) |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL 16 (Docker container) |
| Cache | Redis 7 (Docker container) |
| Auth | JWT (access token) + HttpOnly cookie (refresh token) |
| Email | Gmail SMTP via Nodemailer |
| Deploy | Docker Compose |

---

## Quick Start (Docker)

### Prerequisites
- Docker >= 24
- Docker Compose v2

### 1. Clone and configure
```bash
git clone https://github.com/lamba-manish-hexalog/ripfarsight.git
cd ripfarsight
cp .env.example .env
# Edit .env — set strong passwords for POSTGRES_PASSWORD, JWT_SECRET, JWT_REFRESH_SECRET
```

### 2. Start all services
```bash
docker compose up -d
```

This starts: **PostgreSQL**, **Redis**, **Backend API**, **Frontend (Nginx)**

### 3. Run migrations + seed
```bash
docker compose run --rm migrate
```

Seeds: 4 roles, 3 leave types, default shift, super admin (`admin@hexalog.in`)

### 4. Access
- **Frontend:** http://localhost
- **Backend API:** http://localhost:4000/health
- **DB:** localhost:5432 (user: rfsuser)

---

## Docker Services

| Service | Container | Port |
|---------|-----------|------|
| Frontend (Nginx + React) | `rfs-frontend` | 80 |
| Backend (Node.js API) | `rfs-backend` | 4000 |
| PostgreSQL | `rfs-db` | 5432 |
| Redis | `rfs-redis` | 6379 |

---

## Local Development (without Docker)

### Prerequisites
- Node.js >= 20
- PostgreSQL + Redis running locally

```bash
npm run install:all
cp .env.example backend/.env
# Edit backend/.env — set DATABASE_URL to localhost:5432, REDIS_URL to localhost:6379
cd backend && npm run db:generate && npm run db:migrate && npm run db:seed && cd ..
npm run dev
# Frontend: http://localhost:5173  |  Backend: http://localhost:4000
```

---

## Project Structure

```
ripfarsight/
├── frontend/
│   ├── src/
│   │   ├── components/    pages/    hooks/
│   │   ├── services/      store/    types/    utils/
│   ├── Dockerfile
│   └── nginx.conf         # Nginx SPA + API proxy config
├── backend/
│   ├── src/
│   │   ├── routes/        controllers/    services/
│   │   ├── middleware/    models/         utils/
│   └── prisma/
│       ├── schema.prisma
│       └── seed.ts
├── docker-compose.yml     # All 4 services
├── .env.example
├── deploy.sh
└── README.md
```

---

## Deployment

```bash
# On the server:
git clone https://github.com/lamba-manish-hexalog/ripfarsight.git /var/www/ripfarsight
cd /var/www/ripfarsight
cp .env.example .env   # fill in production values
chmod +x deploy.sh
./deploy.sh
```

---

## Linear Epic
[HEX-730 — Infrastructure & Setup](https://linear.app/hexalog-technologies/issue/HEX-730)

---
*Managed by VectorNexus[Beta] — Hexalog AI SDLC Orchestration*
