---
order: 5
title: FlipWise
kind: Lern-App
summary: Karteikarten-App · React & Socket.IO
label: Web-App · Full Stack
categories: [app]
lead: Lernen, das hängen bleibt — eine Karteikarten-App mit Echtzeit-Backend.
description: >-
  FlipWise ist eine Lern-App für Karteikarten: Stapel anlegen, Karten umdrehen, sich selbst ehrlich bewerten.
  Schwere Karten kommen öfter dran, leichte seltener.
context: HTL Villach · Web- & App-Entwicklung, 4. Jahrgang
year: '2025'
role: Konzept, Frontend, Backend
tools: React 19 · Vite 7 · Tailwind CSS 3 · React Router 7 · Socket.IO · Node.js / Express · SQLite · JWT · bcrypt · Chart.js · react-dnd
cover:
  src: ../../../assets/projects/flipwise/01_login.png
  position: left
gallery:
  - src: ../../../assets/projects/flipwise/03_dashboard.png
    caption: Dashboard mit Kennzahlen und Kartenstapeln
  - src: ../../../assets/projects/flipwise/05_lernmodus_frage.png
    caption: Lernmodus — Vorderseite der Karte
    focus: 32
  - src: ../../../assets/projects/flipwise/06_lernmodus_antwort.png
    caption: Lernmodus — Rückseite der Karte
    focus: 32
  - src: ../../../assets/projects/flipwise/08_auswertung.png
    caption: Auswertung einer Lerneinheit
  - src: ../../../assets/projects/flipwise/09_karte_erstellen.png
    caption: Karte erstellen mit Live-Vorschau
  - src: ../../../assets/projects/flipwise/01_login.png
    caption: Login mit Kartenfächer
    focus: 100
credits: Icons, Logo und Demo-Karten selbst gestaltet
stats:
  - value: '3'
    label: Bewertungsstufen steuern die Wiederholung
  - value: 5×
    label: Gewicht einer „schweren“ Karte
  - value: '8'
    label: Ansichten, alle neu gestaltet
  - value: '2'
    label: 'Kanäle: Socket.IO und REST'
quote: Schwere Karten kommen wieder. Leichte lassen dich in Ruhe.
---

## Die *Aufgabe*

Ziel war eine vollständige kleine Web-App mit eigenem Backend statt eines reinen Frontend-Prototyps: Registrierung und Login, Daten pro Nutzer, Echtzeit-Kommunikation und eine Lernlogik, die mehr kann als „nächste Karte“.

## Die *Lösung*

- **Lernlogik:** Jede Bewertung (leicht, mittel, schwer) wird pro Karte gezählt. Die nächste Karte wird gewichtet gezogen — „schwer“ zählt fünffach, „mittel“ doppelt, „leicht“ einfach.
- **Echtzeit:** Stapel und Karten laufen über Socket.IO-Events (`getDecks`, `newCard`, `getNextCard`, `rateCard`), Kontofunktionen über eine REST-API.
- **Auth:** Registrierung mit Passwortregeln, bcrypt-Hashes, ein JWT für die Sitzung; Benutzername, E-Mail und Passwort lassen sich ändern und das Konto löschen.
- **Interaktion:** Stapel per Drag-and-drop sortieren, Karten in 3D umdrehen, Auswertung als Donut-Diagramm.

## Die *Überarbeitung*

Die App war funktional fertig, sah aber aus wie ein Standard-Tailwind-Layout in Blau. Für das Portfolio habe ich sie im Oktober 2026 neu gestaltet:

- **Eigene Bildsprache:** Die Karte sieht aus wie eine echte Karteikarte — cremefarbenes Papier, eine rote Kopflinie, blaue Lineatur. Tintenblau als Markenfarbe, Fraunces für Überschriften und DM Sans für die Oberfläche.
- **Neues Dashboard:** Eine Begrüßung, vier Kennzahlen und Stapel als Kartenstapel mit Fortschrittsbalken — die Zahlen kommen live aus der Datenbank.
- **Lernmodus:** Eine große Karte, ein Sitzungszähler, farbige Bewertungsbuttons; nach der Bewertung folgt automatisch die nächste Karte.
- **Login und Registrierung:** Ein geteilter Screen mit Kartenfächer, einer Passwort-Checkliste und Fehlermeldungen im Formular statt `alert()`.
- **Mobil:** Eine Tab-Leiste statt der Seitenleiste.
- **Bugs behoben:** Ein Neuladen hat früher abgemeldet, und die „Bearbeiten“-Seite konnte keinen Stapel laden. Beides funktioniert jetzt.
