---
order: 4
title: TK Ebene Reichenau
kind: "Diplom­arbeit"
summary: Diplomarbeit · Sulu, Twig & Next.js
label: Diplomarbeit · Kundenprojekt · Team
categories: [web]
lead: Ein CMS, zwei Frontends — die neue Website der Trachtenkapelle Ebene Reichenau als Diplomarbeit.
description: >-
  Dieselbe Vereinswebsite, zweimal gebaut: einmal klassisch mit Twig direkt aus dem CMS, einmal headless mit Next.js.
  Die Diplomarbeit vergleicht beide Ansätze an einem echten Kundenprojekt.
client: Trachtenkapelle Ebene Reichenau, Kärnten
year: '2026'
role: Entwicklung beider Frontends und des Sulu-Backends im Zweierteam (162 von 312 Commits)
tools: Sulu 3 · Symfony 7.4 · PHP 8.4 · MariaDB · Twig · Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Webpack Encore · Biome · DDEV
cover:
  src: ../../../assets/projects/tk-ebene-reichenau/16_mobile_startseite_top.png
  position: top
# Images with identifiable people, names or the club's crest are deliberately left out.
# Once the club has agreed, copy them from 01_Datensammlung/04_TK-Ebene-Reichenau/bilder to
# src/assets/projects/tk-ebene-reichenau and list them here and in ../tk-ebene-reichenau.md.
gallery:
  - src: ../../../assets/projects/tk-ebene-reichenau/03_startseite_termine.png
    caption: Kommende Auftritte auf der Startseite
  - src: ../../../assets/projects/tk-ebene-reichenau/11_termine.png
    caption: Terminliste des laufenden Jahres
  - src: ../../../assets/projects/tk-ebene-reichenau/13_chronik_zeitstrahl.png
    caption: Chronik als Zeitstrahl
    focus: 100
  - src: ../../../assets/projects/tk-ebene-reichenau/19_mobile_termine.png
    caption: Mobile Ansicht der Termine (390 px)
    fit: contain
stats:
  - value: '2'
    label: Frontends auf einem CMS (Twig und Next.js)
  - value: '15'
    label: Inhaltsblöcke, jeder doppelt gebaut
  - value: '312'
    label: Commits in fünf Wochen, 162 davon von mir
  - value: '59'
    label: Pull Requests
quote: Gleiche Inhalte, gleiches Design — und trotzdem zwei verschiedene Websites.
---

## Die *Aufgabe*

Die Kapelle brauchte eine neue Website, die der Verein selbst pflegt: Termine, Beiträge mit Fotoalben, rund 70 Mitglieder nach Register, eine Chronik zurück bis 1932. Für die Diplomarbeit kam eine zweite Frage dazu: Lohnt sich ein Headless-Frontend für ein Projekt dieser Art wirklich — oder reicht serverseitiges Twig?

## Die *Lösung*

- **Zwei Webspaces, ein Backend:** Sulu liefert dieselben Inhalte als HTML (Twig) und als JSON (Next.js). Eine Format-Policy hält beide strikt getrennt — der Headless-Webspace beantwortet HTML-Anfragen mit 406.
- **Inhalte als Bausteine:** 11 Seitenvorlagen und 15 Blöcke (Hero, Terminliste, Mitgliederliste, Chronik-Abschnitt, News-Feed, Kontaktformular …). Jeder Block existiert als XML-Definition, Twig-Template und React-Komponente.
- **Template-Registry in Next.js:** Eine Catch-all-Route lädt die Seite als JSON, und eine Registry wählt anhand des Template-Keys die passende Komponente. Sulus Live-Vorschau läuft per `postMessage` in dasselbe Rendering.
- **Performance als Messgröße:** Zwei Bildstrategien (der Next-Optimizer mit AVIF/WebP gegen Sulus Renditions) lassen sich umschalten und wurden gegeneinander gemessen — LCP auf der Mitgliederseite 1,94 s gegen 2,43 s.
- **Sicherheit & Datenschutz:** Content Security Policy und Security-Header auf beiden Stacks, ein Kontaktformular mit Token und Honeypot, Google Analytics erst nach Zustimmung.
- **Design:** Dunkles Tannengrün, viel Weißraum, eine ruhige Grotesk — das Vereinswappen als einziges Ornament im Hero.
