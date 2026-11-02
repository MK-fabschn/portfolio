---
order: 2
title: Livora
kind: "Buchungs­plattform"
summary: Buchungs- & Verwaltungsplattform · Next.js
label: Web-App · Full Stack · Team
categories: [app]
lead: Stiller Luxus, weltweit — eine Buchungs- und Verwaltungsplattform für Luxusresidenzen.
description: >-
  Livora verbindet eine redaktionelle Landingpage für Luxusresidenzen mit einer echten Verwaltungs-App —
  mit Rollen, Audit-Log und Datei-Uploads.
context: HTL Villach · Web- & App-Entwicklung, 4. Jahrgang
year: '2026'
role: Full-Stack-Entwicklung im Zweierteam (Auth, Docker, Releases), UI-Überarbeitung für das Portfolio
tools: Next.js 16 · React 19 · TypeScript · Prisma 7 · PostgreSQL · Better Auth · MinIO / S3 · Tailwind CSS 4 · Docker · GitLab CI
cover:
  src: ../../../assets/projects/livora/16_mobile_landing.png
  position: top
gallery:
  - src: ../../../assets/projects/livora/01_landing_hero.png
    caption: Hero „Marbella – Residence of the Month“
  - src: ../../../assets/projects/livora/02_landing_elegance.png
    caption: „Where Elegance meets Living“ — überlappende Bildkomposition
  - src: ../../../assets/projects/livora/06_apartments_kollektion.png
    caption: Die Kollektion — Objektkarten mit Lage und Nummerierung
  - src: ../../../assets/projects/livora/09_detail_fakten_grundriss.png
    caption: Eckdaten, Monatsmiete und Grundriss
  - src: ../../../assets/projects/livora/11_manager_dashboard.png
    caption: Manager-Dashboard „Portfolio Overview“
  - src: ../../../assets/projects/livora/14_kundenkonto.png
    caption: Kundenbereich „Willkommen, Luca“
credits: 'Fotos in den Screenshots: Unsplash / Pexels · alle Konten und Mietverträge sind Demodaten'
stats:
  - value: '118'
    label: Commits im Team, 49 davon von mir
  - value: '20'
    label: Merge Requests, 19 gemergt
  - value: '4'
    label: Releases (v0.0 → final)
  - value: ~74 h
    label: Erfasste Projektzeit
quote: 'Luxus heißt hier: nichts, was ablenkt.'
---

## Die *Aufgabe*

Ziel war eine realistische, mandantenfähige SaaS-Architektur statt einer reinen CRUD-Übung: tiefe Relationen (Objekt → Einheit → Mietvertrag → Mieter), zwei Rollen mit eigenen Bereichen, Bilder und Grundrisse im Object Storage und ein sauberer Git-Workflow mit Issues, Merge Requests und Releases.

## Die *Lösung*

- **Datenmodell:** Ein Prisma-Schema mit Property, Unit, Lease, Tenant, Document und AuditLog, Soft Deletes über `deletedAt`.
- **Auth & Rollen:** Better Auth mit Passwort-Hashing (argon2), den Rollen Customer und Manager, Rate Limiting und Captcha-Anbindung.
- **Medien:** Cover, Innenansichten und Grundrisse pro Objekt in MinIO (S3-kompatibel), ausgeliefert über `next/image`.
- **Design:** Montserrat Black in Versalien trifft auf die Schreibschrift Licorice, Espressobraun als Markenfarbe — ein ruhiger Premium-Magazin-Look.
- **Prozess:** 3 Sprints, 4 Releases, 20 Merge Requests mit Vorlagen und gegenseitigem Review.

## Die *Überarbeitung*

Für das Portfolio habe ich die Oberfläche im September 2026 überarbeitet:

- **Manager-Dashboard neu gestaltet:** vorher fünf Link-Kacheln auf Schwarz, jetzt eine „Portfolio Overview“ mit KPIs, Belegungsbalken pro Objekt, einer Audit-Log-Timeline und einer Tabelle der nächsten Vertragsenden — alles live aus der Datenbank.
- **Kundenbereich neu gestaltet:** „Willkommen, Luca“ mit Kennzahlen und den eigenen Residenzen als Bildkarten.
- **Landingpage & Apartmentliste:** Lorem ipsum durch echte Texte ersetzt, unpassende Bilder getauscht, jedes Objekt mit passendem Cover aus der Datenbank, Ortsangaben, ein Scroll-Indikator und eine Navigation, die beim Scrollen einen Hintergrund bekommt.
- **Bugfix:** `serverExternalPackages: ["better-auth"]` lud beim Server-Rendering eine zweite React-Instanz — „Invalid hook call“ und HTTP 500 auf jeder Seite mit Navbar. Behoben.
