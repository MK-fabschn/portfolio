---
order: 5
title: FlipWise
kind: Flashcard app
summary: Flashcard app · React & Socket.IO
label: Web app · Full stack
categories: [app]
lead: Learning that sticks — a flashcard app with a real-time backend.
description: >-
  FlipWise is a study app for flashcards: create decks, flip cards, rate yourself honestly.
  Hard cards come up more often, easy ones less.
context: HTL Villach · Web & app development, 4th year
year: '2025'
role: Concept, frontend, backend
tools: React 19 · Vite 7 · Tailwind CSS 3 · React Router 7 · Socket.IO · Node.js / Express · SQLite · JWT · bcrypt · Chart.js · react-dnd
cover:
  src: ../../assets/projects/flipwise/01_login.png
  position: left
gallery:
  - src: ../../assets/projects/flipwise/03_dashboard.png
    caption: Dashboard with key figures and deck stacks
  - src: ../../assets/projects/flipwise/05_lernmodus_frage.png
    caption: Study mode — front of the card
    focus: 32
  - src: ../../assets/projects/flipwise/06_lernmodus_antwort.png
    caption: Study mode — back of the card
    focus: 32
  - src: ../../assets/projects/flipwise/08_auswertung.png
    caption: Results of a session
  - src: ../../assets/projects/flipwise/09_karte_erstellen.png
    caption: Creating a card with live preview
  - src: ../../assets/projects/flipwise/01_login.png
    caption: Login with a fan of cards
    focus: 100
credits: Icons, logo and demo cards made by me
stats:
  - value: '3'
    label: Rating levels control the repetition
  - value: 5×
    label: Weight of a “hard” card
  - value: '8'
    label: Views, all redesigned
  - value: '2'
    label: 'Channels: Socket.IO and REST'
quote: Hard cards come back. Easy ones leave you alone.
---

## The *challenge*

The goal was a complete small web app with its own backend rather than a frontend-only prototype: registration and login, data per user, real-time communication and study logic that can do more than “next card”.

## The *solution*

- **Study logic:** Every rating (easy, medium, hard) is counted per card. The next card is drawn by weight — “hard” counts five times, “medium” twice, “easy” once.
- **Real time:** Decks and cards run over Socket.IO events (`getDecks`, `newCard`, `getNextCard`, `rateCard`), account functions over a REST API.
- **Auth:** Registration with password rules, bcrypt hashes, a JWT for the session; username, e-mail and password can be changed and the account deleted.
- **Interaction:** Sort decks by drag and drop, flip cards in 3D, results as a doughnut chart.

## The *rework*

The app was functionally complete but looked like a default Tailwind layout in blue. For the portfolio I redesigned it in October 2026:

- **Its own visual language:** The card looks like a real index card — cream paper, a red header line, blue ruling. Ink blue as the brand colour, Fraunces for headings and DM Sans for the interface.
- **New dashboard:** A greeting, four key figures and decks as card stacks with progress bars — the numbers come live from the database.
- **Study mode:** A large card, a session counter, coloured rating buttons; after rating, the next card follows automatically.
- **Login and registration:** A split screen with a fan of cards, a password checklist and error messages in the form instead of `alert()`.
- **Mobile:** A tab bar instead of the sidebar.
- **Bugs fixed:** A reload used to log you out, and the “Edit” page could not load a deck. Both work now.
