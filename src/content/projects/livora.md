---
order: 2
title: Livora
kind: Booking platform
summary: Booking & management platform · Next.js
label: Web app · Full stack · Team
categories: [app]
lead: Quiet luxury, worldwide — a booking and management platform for luxury residences.
description: >-
  Livora combines an editorial landing page for luxury residences with a real management app —
  with roles, an audit log and file uploads.
context: HTL Villach · Web & app development, 4th year
year: '2026'
role: Full-stack development in a team of two (auth, Docker, releases), UI rework for the portfolio
tools: Next.js 16 · React 19 · TypeScript · Prisma 7 · PostgreSQL · Better Auth · MinIO / S3 · Tailwind CSS 4 · Docker · GitLab CI
cover:
  src: ../../assets/projects/livora/16_mobile_landing.png
  position: top
gallery:
  - src: ../../assets/projects/livora/01_landing_hero.png
    caption: Hero “Marbella – Residence of the Month”
  - src: ../../assets/projects/livora/02_landing_elegance.png
    caption: “Where Elegance meets Living” — overlapping image composition
  - src: ../../assets/projects/livora/06_apartments_kollektion.png
    caption: The collection — property cards with location and numbering
  - src: ../../assets/projects/livora/09_detail_fakten_grundriss.png
    caption: Key figures, monthly rent and floor plan
  - src: ../../assets/projects/livora/11_manager_dashboard.png
    caption: Manager dashboard “Portfolio Overview”
  - src: ../../assets/projects/livora/14_kundenkonto.png
    caption: Customer area “Willkommen, Luca”
credits: 'Photos in the screenshots: Unsplash / Pexels · all accounts and leases are demo data'
stats:
  - value: '118'
    label: Commits in the team, 49 of them mine
  - value: '20'
    label: Merge requests, 19 merged
  - value: '4'
    label: Releases (v0.0 → final)
  - value: ~74 h
    label: Tracked project time
quote: 'Luxury here means: nothing that distracts.'
---

## The *challenge*

The goal was a realistic, multi-tenant SaaS architecture rather than a plain CRUD exercise: deep relations (property → unit → lease → tenant), two roles with their own areas, images and floor plans in object storage, and a clean Git workflow with issues, merge requests and releases.

## The *solution*

- **Data model:** A Prisma schema with Property, Unit, Lease, Tenant, Document and AuditLog, soft deletes via `deletedAt`.
- **Auth & roles:** Better Auth with password hashing (argon2), the roles Customer and Manager, rate limiting and a captcha integration.
- **Media:** Cover, interior views and floor plans per property in MinIO (S3-compatible), delivered through `next/image`.
- **Design:** Montserrat Black in capitals meets the script typeface Licorice, with espresso brown as the brand colour — a calm, premium magazine look.
- **Process:** 3 sprints, 4 releases, 20 merge requests with templates and mutual review.

## The *rework*

For the portfolio I reworked the interface in September 2026:

- **Manager dashboard redesigned:** previously five link tiles on black, now a “Portfolio Overview” with KPIs, occupancy bars per property, an audit-log timeline and a table of the next lease endings — all live from the database.
- **Customer area redesigned:** “Willkommen, Luca” with key figures and the customer's own residences as image cards.
- **Landing page & apartment list:** lorem ipsum replaced with real copy, unsuitable images swapped, every property with a fitting cover from the database, locations, a scroll indicator and a navigation that gains a background on scroll.
- **Bug fix:** `serverExternalPackages: ["better-auth"]` loaded a second React instance during server rendering — “Invalid hook call” and HTTP 500 on every page with the navbar. Fixed.
