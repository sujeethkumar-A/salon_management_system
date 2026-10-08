# Mysa Salon Appointment Management System

A Next.js + TypeScript MVP for a college software engineering viva. It includes customer, staff, and admin workspaces, a complete booking flow, appointment conflict checking, Supabase schema/RLS, and demo data.

## Run locally

1. Install Node.js 20+ from https://nodejs.org.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add Supabase credentials.
4. Run `npm run dev`, then open http://localhost:3000.

Without Supabase credentials, the app runs in demo mode using the included sample records. The UI is fully navigable and the booking confirmation flow works locally. With Supabase configured, `POST /api/appointments` performs database-backed working-hours and overlap checks.

## Supabase setup

Run `supabase/schema.sql` in the SQL editor. Create Auth users for the demo accounts, insert matching `profiles` rows, then run/adapt `supabase/seed.sql`. For production, use the Supabase Auth signup flow and never expose the service role key to the browser.

Required environment variables are in `.env.example`.

## Demo roles

Use the login screen at `/login`; it provides one-click demo navigation for `customer`, `staff`, and `admin`. Suggested demo accounts for Supabase Auth: `customer@mysa.salon`, `maya@mysa.salon`, and `admin@mysa.salon` with a password you choose.

## Architecture

- `app/`: public pages, role workspaces, and the appointment API route.
- `components/`: shared shell, navigation, cards, badges, and buttons.
- `lib/`: domain types, demo data, formatting helpers, and Supabase client.
- `supabase/`: relational schema, indexes, RLS policies, and seed guidance.

## Overlap prevention

The API derives `end_time` from `start_time + duration_minutes`, verifies the slot is within 09:00-18:00 or the staff member's configured hours, then queries appointments where `existing.start_time < requested.end_time` and `existing.end_time > requested.start_time`. A match returns `Selected staff member is not available during this time.` before insertion.

## AI feature

The MVP keeps the core booking workflow deterministic. A simple rule-based recommendation can be added by matching words such as `skin`, `relaxing`, `dry`, `nails`, or `hair` to the existing service category; this avoids making the demo depend on an external AI key. AI-assisted development suggestions adopted here were: typed domain models, a single reusable role shell, server-side conflict checks, and SQL-level RLS boundaries.

## Notes

The dashboard charts are lightweight CSS visualizations so the demo has no chart dependency failure when credentials are missing. The package includes Recharts for extending the report cards with interactive charts once live aggregates are connected.
