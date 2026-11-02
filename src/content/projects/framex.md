---
order: 6
title: FrameX
kind: Film database
summary: Film & series database · Laravel
label: Web app · Laravel
categories: [app, graphic]
lead: Films, series, watchlist — a night at the cinema in the browser.
description: >-
  FrameX is a film and series database with accounts and a watchlist: popular films, cinema releases, series and cast
  at a glance, plus a live search that shows results while you type.
context: HTL Villach · Web & app development, 3rd year
year: '2025'
role: Development, UI
tools: Laravel 12 · PHP 8.2 · Jetstream / Fortify · Livewire 3 · Alpine.js · Tailwind CSS 3 · Vite · MariaDB · TMDB API · PHPUnit
cover:
  src: ../../assets/projects/framex/13_mobile_startseite.png
  position: top
gallery:
  - src: ../../assets/projects/framex/01_startseite_hero.png
    caption: Hero with the most popular film
  - src: ../../assets/projects/framex/02_startseite_beliebt.png
    caption: “Beliebte Filme” — poster grid with ratings
  - src: ../../assets/projects/framex/04_film_detail.png
    caption: Film detail page with watchlist button
  - src: ../../assets/projects/framex/06_suche.png
    caption: Live search with Livewire
  - src: ../../assets/projects/framex/07_watchlist.png
    caption: Personal watchlist
    focus: 40
  - src: ../../assets/projects/framex/16_plakate_uebersicht.png
    caption: My own posters from the demo catalogue
credits: 'Poster photos: Unsplash · all films, texts and people in the catalogue are invented'
stats:
  - value: '30'
    label: Posters of my own in the demo catalogue
  - value: '4'
    label: 'Areas: films, series, cast, watchlist'
  - value: '1'
    label: Switch between demo catalogue and TMDB API
  - value: '14'
    label: Feature tests for account and auth
quote: All the films are made up. The app behind them isn't.
---

## The *challenge*

The project was meant to show how a Laravel application deals with a third-party API: loading data from The Movie Database (TMDB), preparing it and combining it with its own data — here with user accounts and a personal watchlist.

## The *solution*

- **API integration:** Controllers fetch popular films, cinema releases, series, people and detail data (cast, images, trailers) from TMDB.
- **Live search:** A Livewire component searches films and series from the second letter on and shows the hits as a dropdown with poster, year and rating.
- **Accounts:** Registration, login, password reset and profile management through Laravel Jetstream and Fortify.
- **Watchlist:** Its own `watchlists` table — films can be saved on the detail page and removed again in the overview.

## The *rework*

For the portfolio I reworked the app in October 2026:

- **A demo catalogue instead of real film posters:** Real film posters are protected by copyright and have no place in a portfolio. With `TMDB_DEMO=true` the app serves its own catalogue in the TMDB format: 20 invented films, 10 series and 24 actors.
- **30 posters of my own:** Designed in four typographic styles — thrillers in Anton capitals, dramas in italic Fraunces, comedies in bold Outfit, science fiction letter-spaced and framed.
- **New interface:** A hero with the most popular film, a poster grid with rating badges, a detail page with a blurred backdrop, the watchlist as a card list. Ember red as the accent on near-black, the typeface Outfit, its own logo.
- **Tidied up:** All TMDB access goes through one class instead of being spread across controllers and Blade templates. A mobile menu was added and Alpine.js is no longer loaded twice.
