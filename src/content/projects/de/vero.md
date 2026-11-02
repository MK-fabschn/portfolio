---
order: 3
title: VERO
kind: "Lern­plattform"
summary: Lernmanagementsystem · Next.js & Supabase
label: Web-App · Marke · Team
categories: [app, graphic]
lead: Lernen mit Struktur — ein Lernmanagementsystem für Schulen.
description: >-
  VERO bündelt Kurse, Materialien, ein Kanban-Board, Kurs-Chats, Notizbücher und einen KI-Tutor in einer Plattform —
  mit getrennten Bereichen für Lehrende und Schüler und einem eigenen, reduzierten Corporate Design.
context: HTL Villach · Web- & App-Entwicklung, 4. Jahrgang
year: 2025/26
role: Lead Developer im Zweierteam (103 von 116 Commits), Corporate Design
tools: Next.js 15 · React 19 · Supabase · Prisma 7 · PostgreSQL · Tailwind CSS 4 · shadcn/ui · dnd-kit · OpenAI API · Cloudflare Turnstile · Resend
cover:
  src: ../../../assets/projects/vero/03_login.png
  position: centre
gallery:
  - src: ../../../assets/projects/vero/01_landing_hero.png
    caption: Landingpage „Lernen mit Struktur.“
  - src: ../../../assets/projects/vero/04_student_dashboard.png
    caption: Schüler-Dashboard „Hallo, Lena.“
  - src: ../../../assets/projects/vero/06_task_board.png
    caption: Kanban-Board mit Prioritäten
  - src: ../../../assets/projects/vero/10_lehrer_dashboard.png
    caption: Lehrer-Startseite mit Klassenübersicht
  - src: ../../../assets/projects/vero/03_login.png
    caption: Login über einem Foto-Hintergrund
    focus: 60
  - src: ../../../assets/projects/vero/corporate-design_06.png
    caption: Corporate-Design-Handbuch — das Logo
    focus: 100
  - src: ../../../assets/projects/vero/corporate-design_12.png
    caption: Corporate-Design-Handbuch — Typografie
    focus: 100
credits: 'Login-Foto: Unsplash · alle Personen und Kurse in der App sind erfundene Demodaten'
stats:
  - value: '116'
    label: Commits, 103 davon von mir
  - value: '2'
    label: Rollen
  - value: '4'
    label: 'Module: Kurse, Aufgaben, Notizen, KI-Tutor'
  - value: '3'
    label: Markenfarben
quote: Eine Lernplattform, die nicht nach Verwaltung aussieht.
---

## Die *Aufgabe*

Schulische Lernplattformen wirken oft überladen. VERO sollte das Gegenteil sein: ruhig, fokussiert, klar gegliedert — und trotzdem alles abdecken, was im Unterricht digital passiert.

## Die *Lösung*

- **Rollen:** Supabase Auth mit den Rollen Schüler und Lehrer. Die Middleware leitet jede Rolle in ihren eigenen Bereich und sperrt die anderen.
- **Lehrende:** Kurse anlegen, Schüler per E-Mail einschreiben, Materialien und Markdown/MDX-Folien hochladen.
- **Schüler:** Ein Kanban-Board (dnd-kit) mit Priorität und Fälligkeit, ein Kurs-Chat, ein Notizbuch mit Berechtigungen pro Person und ein KI-Tutor mit eigenem didaktischem System-Prompt: zuerst Hinweise, dann Schritte mit Begründung, Kontrollfragen und eine „Merke dir“-Zusammenfassung.
- **Sicherheit:** Turnstile-Captcha bei Login und Registrierung, E-Mails über Resend.
- **Corporate Design:** Ein Logo aus offenen, diagonalen Linien (der „Lernpfad“), die Farben Electric Blue, Athens Grey und Charcoal Black, nummerierte Kapitel und ein gestricheltes Raster als Gestaltungselement.

## Die *Überarbeitung*

Für das Portfolio habe ich die Oberfläche im September 2026 überarbeitet:

- **Neue Landingpage im VERO-Design:** „Lernen mit Struktur.“, ein Produkt-Screenshot, nummerierte Module 01–04 und ein blaues Rollen-Band — genau wie im Designhandbuch.
- **Schüler-Dashboard gebaut:** Begrüßung, Lernfortschritt, Fortschritt pro Fach, anstehende Abgaben mit Status und die offenen Aufgaben — live aus der Datenbank.
- **Lehrer-Startseite ergänzt:** KPIs, eine Kurstabelle mit Fortschrittsbalken und die neuesten Fragen aus den Kurs-Chats.
- **Details:** Schrift auf Inter umgestellt (wie im Handbuch vorgesehen), übrig gebliebene englische Texte übersetzt, lange Kurstitel laufen nicht mehr in den Pfeil.
