# TrustLens

This workspace contains a browser extension, a React frontend, and an Express backend for the TrustLens project.

Structure

- `frontend/` - Vite + React application (JSX). Run with `npm run dev` inside `frontend`.
- `extension/` - Browser extension manifest and scripts (manifest.json, background.js, content.js).
- `backend/` - Express backend exposing `/api` endpoints. Run with `npm run dev` inside `backend`.
- `database/` - Example `schema.sql` for MySQL.

Quick start (from repository root)

Install dependencies for frontend and backend:

```bash
cd frontend && npm install
cd ../backend && npm install
```

Start backend and frontend in separate terminals:

```bash
cd backend && npm run dev
cd frontend && npm run dev
```

The frontend Vite server proxies `/api` to `http://localhost:4000`.

# TrustLens
