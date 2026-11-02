---
order: 6
title: FrameX
kind: "Film­datenbank"
summary: Film- & Seriendatenbank · Laravel
label: Web-App · Laravel
categories: [app, graphic]
lead: Filme, Serien, Watchlist — ein Kinoabend im Browser.
description: >-
  FrameX ist eine Film- und Seriendatenbank mit Konten und Watchlist: beliebte Filme, Kinostarts, Serien und Besetzung
  auf einen Blick, dazu eine Live-Suche, die schon während des Tippens Ergebnisse zeigt.
context: HTL Villach · Web- & App-Entwicklung, 3. Jahrgang
year: '2025'
role: Entwicklung, UI
tools: Laravel 12 · PHP 8.2 · Jetstream / Fortify · Livewire 3 · Alpine.js · Tailwind CSS 3 · Vite · MariaDB · TMDB API · PHPUnit
cover:
  src: ../../../assets/projects/framex/13_mobile_startseite.png
  position: top
gallery:
  - src: ../../../assets/projects/framex/01_startseite_hero.png
    caption: Hero mit dem beliebtesten Film
  - src: ../../../assets/projects/framex/02_startseite_beliebt.png
    caption: „Beliebte Filme“ — Plakatraster mit Bewertungen
  - src: ../../../assets/projects/framex/04_film_detail.png
    caption: Filmdetailseite mit Watchlist-Button
  - src: ../../../assets/projects/framex/06_suche.png
    caption: Live-Suche mit Livewire
  - src: ../../../assets/projects/framex/07_watchlist.png
    caption: Persönliche Watchlist
    focus: 40
  - src: ../../../assets/projects/framex/16_plakate_uebersicht.png
    caption: Eigene Plakate aus dem Demo-Katalog
credits: 'Plakatfotos: Unsplash · alle Filme, Texte und Personen im Katalog sind erfunden'
stats:
  - value: '30'
    label: Eigene Plakate im Demo-Katalog
  - value: '4'
    label: 'Bereiche: Filme, Serien, Besetzung, Watchlist'
  - value: '1'
    label: Schalter zwischen Demo-Katalog und TMDB-API
  - value: '14'
    label: Feature-Tests für Konto und Auth
quote: Alle Filme sind erfunden. Die App dahinter nicht.
---

## Die *Aufgabe*

Das Projekt sollte zeigen, wie eine Laravel-Anwendung mit einer Fremd-API umgeht: Daten aus The Movie Database (TMDB) laden, aufbereiten und mit eigenen Daten verknüpfen — hier mit Benutzerkonten und einer persönlichen Watchlist.

## Die *Lösung*

- **API-Anbindung:** Controller holen beliebte Filme, Kinostarts, Serien, Personen und Detaildaten (Besetzung, Bilder, Trailer) von TMDB.
- **Live-Suche:** Eine Livewire-Komponente durchsucht Filme und Serien ab dem zweiten Buchstaben und zeigt die Treffer als Dropdown mit Plakat, Jahr und Bewertung.
- **Konten:** Registrierung, Login, Passwort-Reset und Profilverwaltung über Laravel Jetstream und Fortify.
- **Watchlist:** Eine eigene `watchlists`-Tabelle — Filme lassen sich auf der Detailseite merken und in der Übersicht wieder entfernen.

## Die *Überarbeitung*

Für das Portfolio habe ich die App im Oktober 2026 überarbeitet:

- **Ein Demo-Katalog statt echter Filmplakate:** Echte Filmplakate sind urheberrechtlich geschützt und haben in einem Portfolio nichts verloren. Mit `TMDB_DEMO=true` liefert die App einen eigenen Katalog im TMDB-Format: 20 erfundene Filme, 10 Serien und 24 Schauspielerinnen und Schauspieler.
- **30 eigene Plakate:** Gestaltet in vier typografischen Stilen — Thriller in Anton-Versalien, Dramen in kursiver Fraunces, Komödien in fetter Outfit, Science-Fiction gesperrt und gerahmt.
- **Neue Oberfläche:** Ein Hero mit dem beliebtesten Film, ein Plakatraster mit Bewertungs-Badges, eine Detailseite mit unscharfem Hintergrund, die Watchlist als Kartenliste. Glutrot als Akzent auf Fast-Schwarz, die Schrift Outfit, ein eigenes Logo.
- **Aufgeräumt:** Alle TMDB-Zugriffe laufen über eine Klasse, statt über Controller und Blade-Templates verstreut zu sein. Ein mobiles Menü kam dazu, und Alpine.js wird nicht mehr doppelt geladen.
