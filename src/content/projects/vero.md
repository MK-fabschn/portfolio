---
order: 3
title: VERO
kind: Learning platform
summary: Learning management system · Next.js & Supabase
label: Web app · Brand · Team
categories: [app, graphic]
lead: Learning with structure — a learning management system for schools.
description: >-
  VERO bundles courses, materials, a kanban board, course chats, notebooks and an AI tutor in one platform —
  with separate areas for teachers and students and its own, reduced corporate design.
context: HTL Villach · Web & app development, 4th year
year: 2025/26
role: Lead developer in a team of two (103 of 116 commits), corporate design
tools: Next.js 15 · React 19 · Supabase · Prisma 7 · PostgreSQL · Tailwind CSS 4 · shadcn/ui · dnd-kit · OpenAI API · Cloudflare Turnstile · Resend
cover:
  src: ../../assets/projects/vero/03_login.png
  position: centre
gallery:
  - src: ../../assets/projects/vero/01_landing_hero.png
    caption: Landing page “Lernen mit Struktur.”
  - src: ../../assets/projects/vero/04_student_dashboard.png
    caption: Student dashboard “Hallo, Lena.”
  - src: ../../assets/projects/vero/06_task_board.png
    caption: Kanban board with priorities
  - src: ../../assets/projects/vero/10_lehrer_dashboard.png
    caption: Teacher home with class overview
  - src: ../../assets/projects/vero/03_login.png
    caption: Login over a photo backdrop
    focus: 60
  - src: ../../assets/projects/vero/corporate-design_06.png
    caption: Corporate design manual — the logo
    focus: 100
  - src: ../../assets/projects/vero/corporate-design_12.png
    caption: Corporate design manual — typography
    focus: 100
credits: 'Login photo: Unsplash · all people and courses in the app are fictional demo data'
stats:
  - value: '116'
    label: Commits, 103 of them mine
  - value: '2'
    label: Roles
  - value: '4'
    label: 'Modules: courses, tasks, notes, AI tutor'
  - value: '3'
    label: Brand colours
quote: A learning platform that doesn't look like administration.
---

## The *challenge*

School learning platforms often feel overloaded. VERO was meant to be the opposite: calm, focused, clearly structured — and still cover everything that happens digitally in class.

## The *solution*

- **Roles:** Supabase Auth with the roles student and teacher. The middleware routes each role to its own area and blocks the others.
- **Teachers:** Create courses, enrol students by e-mail, upload materials and Markdown/MDX slides.
- **Students:** A kanban board (dnd-kit) with priority and due date, a course chat, a notebook with per-person permissions and an AI tutor with its own didactic system prompt: hints first, then steps with reasoning, check questions and a “remember this” summary.
- **Security:** Turnstile captcha on login and registration, e-mails through Resend.
- **Corporate design:** A logo made of open, diagonal lines (the “learning path”), the colours Electric Blue, Athens Grey and Charcoal Black, numbered chapters and a dashed grid as a design element.

## The *rework*

For the portfolio I reworked the interface in September 2026:

- **New landing page in the VERO design:** “Lernen mit Struktur.”, a product screenshot, numbered modules 01–04 and a blue roles band — exactly as in the design manual.
- **Student dashboard built:** greeting, learning progress, progress per subject, upcoming submissions with status and the open tasks — live from the database.
- **Teacher home added:** KPIs, a course table with progress bars and the latest questions from the course chats.
- **Details:** typeface switched to Inter (as the manual specifies), leftover English strings translated, long course titles no longer run into the arrow.
