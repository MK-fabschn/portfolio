---
order: 7
title: Noven
kind: Headless-Shop
summary: Headless-Shop · Sulu & Next.js
label: Headless CMS · E-Commerce · Team
categories: [app]
lead: Möbel, die bleiben — ein Headless-Shop mit Sulu als CMS und Next.js als Frontend.
description: >-
  Noven ist ein Möbelshop, dessen Sortiment im CMS lebt: Produkte werden in Sulu gepflegt und über eine REST-API
  an ein Next.js-Frontend geliefert — mit Kollektion, Warenkorb, Merkliste, Checkout und Kundenkonto.
context: HTL Villach · Web- & App-Entwicklung, 4. Jahrgang
year: '2026'
role: Teamprojekt (Zweierteam)
tools: Sulu 3 · Symfony 7.4 · PHP 8.3 · MariaDB 11.4 · Next.js 16 · React 19 · TypeScript · Better Auth · Kysely · Docker
cover:
  src: ../../../assets/projects/noven/07_produkt_detail.png
  position: left
gallery:
  - src: ../../../assets/projects/noven/01_startseite_hero.png
    caption: Hero-Slider „Gestalten Sie Ihren Komfort“
  - src: ../../../assets/projects/noven/03_startseite_kategorien.png
    caption: Kategorien auf der Startseite
    focus: 30
  - src: ../../../assets/projects/noven/06_kollektion_raster.png
    caption: Kollektion mit Kategoriefilter
  - src: ../../../assets/projects/noven/07_produkt_detail.png
    caption: Produktseite mit Tabs und Empfehlungen
  - src: ../../../assets/projects/noven/08_warenkorb.png
    caption: Warenkorb als Seitenleiste
  - src: ../../../assets/projects/noven/15_sulu_admin_produktliste.png
    caption: Produktliste in der Sulu-Administration
credits: 'Fotos: Unsplash · alle Produkte, Preise und die „Noven GmbH“ sind erfunden'
stats:
  - value: '36'
    label: Produkte in 6 Kategorien, gepflegt im CMS
  - value: '2'
    label: 'Systeme: Sulu liefert, Next.js zeigt an'
  - value: '10'
    label: Seiten im Frontend, von der Startseite bis zum Checkout
  - value: '1'
    label: Befehl für den kompletten Demo-Inhalt
quote: Der Shop weiß nichts über Möbel. Das CMS schon.
---

## Die *Aufgabe*

Vor der Diplomarbeit wollten wir wissen, wie sich Sulu als Headless-CMS anfühlt: Wie kommen Inhalte als JSON ins Frontend, wie erweitert man einen Inhaltstyp, und wie weit trägt das CMS, wenn daraus ein Shop werden soll?

## Die *Lösung*

- **Produkt als Inhaltstyp:** Der Sulu-Artikel wurde zum Produkt erweitert — Preis, Kategorie, Bild und Beschreibung als zusätzliche Felder im XML-Template, gepflegt in der normalen Administrationsoberfläche.
- **Eine eigene Listen-API:** Ein Controller liefert `/api/articles` mit aufgelösten Produktfeldern. Die Paginierung läuft zuerst über die IDs und lädt dann nur die Inhalte der aktuellen Seite — sonst schneidet `LIMIT` wegen der Joins Produkte ab.
- **Seed-Befehl:** `app:seed-demo` legt sechs Kategorien, eine Mediensammlung und 36 Produkte an und veröffentlicht sie — über dieselben Sulu-Services, die auch die Administration nutzt.
- **Frontend:** Next.js App Router, eine Startseite mit Hero-Slider, Bestseller-Leiste und Kategorien, eine Kollektion mit Filter, eine Produktseite mit Tabs und Empfehlungen, der Warenkorb als Seitenleiste, eine Merkliste und der Checkout.
- **Konto:** Registrierung und Login mit Better Auth, ein geschützter Kontobereich mit Bestellverlauf, persönlichen Daten und Lieferadresse.
- **Design:** Cormorant Garamond in leichten Schnitten, DM Sans für die Oberfläche, Salbeigrün als einziger Farbakzent — viel Weiß, große Bilder.

## Die *Überarbeitung*

Für das Portfolio wurde der Shop im Oktober 2026 überarbeitet:

- **Fotos statt Farbflächen:** Hero, Kategorien und alle 36 Produkte zeigten nur einfarbige Platzhalter. Jetzt haben sie Fotos; der Seed-Befehl lädt die Produktbilder automatisch in Sulus Medienbibliothek.
- **Lokale Schriften:** Cormorant Garamond und DM Sans kommen aus npm-Paketen statt vom Google-CDN.
- **Kleinigkeiten:** Ein Kategoriezähler korrigiert, die Jahreszahl im Hero aktualisiert, das Logo auf der Registrierungsseite nicht mehr unter der Navigation versteckt.
