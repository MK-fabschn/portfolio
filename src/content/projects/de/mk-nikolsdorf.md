---
order: 1
title: MK Nikolsdorf
kind: "Vereins­website"
summary: Vereinswebsite · Next.js & Payload CMS
label: Web · Kundenprojekt · live
categories: [web]
lead: Blasmusik, die Generationen verbindet — die neue Website der Musikkapelle Nikolsdorf.
description: >-
  Eine Blasmusikkapelle mit fast 190 Jahren Geschichte bekommt einen digitalen Auftritt, der nach Gegenwart aussieht:
  kräftige Typografie, echte Fotos der Kapelle und ein CMS, in dem der Verein Termine, Beiträge und Mitglieder selbst pflegt.
client: Musikkapelle Nikolsdorf, Osttirol
year: '2026'
role: Konzept, Design, Entwicklung, Hosting — allein
tools: Next.js 16 · React 19 · TypeScript · Payload CMS 3 · PostgreSQL · S3-Medienspeicher · Docker · Traefik · GitHub Actions
url: https://mk-nikolsdorf.at
cover:
  src: ../../../assets/projects/mk-nikolsdorf/09_mobile_startseite.png
  position: centre
# Screenshots showing band members are used with permission (confirmed 2 October 2026).
gallery:
  - src: ../../../assets/projects/mk-nikolsdorf/01_startseite_hero.png
    caption: Hero mit der Kapelle vor den Osttiroler Bergen
    focus: 45
  - src: ../../../assets/projects/mk-nikolsdorf/02_startseite_intro.png
    caption: Vorstellung des Vereins mit Kennzahlen und Stempel-Logo
    focus: 100
  - src: ../../../assets/projects/mk-nikolsdorf/04_startseite_termine_verein.png
    caption: Termin-Vorschau auf Tannengrün
    focus: 5
  - src: ../../../assets/projects/mk-nikolsdorf/06_aktuelles.png
    caption: Beitragsarchiv mit Neuigkeiten aus dem Vereinsleben
    focus: 100
  - src: ../../../assets/projects/mk-nikolsdorf/07_mitglieder.png
    caption: Mitgliederseite mit Filter nach Register
    focus: 100
  - src: ../../../assets/projects/mk-nikolsdorf/08_termine.png
    caption: Terminliste, nach Monaten gruppiert
stats:
  - value: '1840'
    label: Gründungsjahr der Kapelle
  - value: '62'
    label: Aktive Musikerinnen und Musiker auf der Website
  - value: '100'
    label: Lighthouse SEO
  - value: '4'
    label: Inhaltstypen im CMS
quote: Tradition im Programm, Gegenwart im Code.
---

## Die *Aufgabe*

Der Verein brauchte eine Website, die sich ohne Entwickler pflegen lässt. Mitglieder sollen Neuigkeiten, Ausrückungen und Konzerte selbst veröffentlichen können — und das Ganze sollte günstig auf einem kleinen Server laufen.

## Die *Lösung*

- **Design:** Warme Naturtöne (Tannengrün, Messinggold, Creme), abgeleitet von Tracht und Landschaft, kombiniert mit einer kräftigen Grotesk als Headline-Schrift. Das Gruppenfoto der Kapelle vor den Osttiroler Bergen trägt den Hero.
- **Inhalte als Datenmodell:** Payload-Collections für Beiträge, Termine, Mitglieder und Medien. Die Mitgliederseite filtert nach Register, die Termine sind nach Monaten gruppiert.
- **Betrieb:** Ein Docker-Compose-Stack mit Traefik als Reverse Proxy auf einem VPS. Deployments laufen über eine GitHub Action per SSH, Medien liegen auf einem eigenen S3-Endpunkt.
- **Datenschutz:** Ein Cookie-Banner mit echter Wahl — Google Analytics lädt erst nach Zustimmung.

## Das *Ergebnis*

- Live in Produktion; der Verein pflegt seine Inhalte selbst über das Payload-Admin.
- Lighthouse (Desktop, gemessen am 30. September 2026): Accessibility 94 · Best Practices 100 · SEO 100.
- 27 Commits von Juni bis September 2026, vollständig allein umgesetzt.
