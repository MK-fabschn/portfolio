---
order: 1
title: MK Nikolsdorf
kind: Club website
summary: Club website · Next.js & Payload CMS
label: Web · Client project · live
categories: [web]
lead: Brass music that connects generations — the new website of the Musikkapelle Nikolsdorf.
description: >-
  A brass band with almost 190 years of history gets a digital presence that looks like the present:
  bold typography, real photos of the band and a CMS the club uses to maintain events, posts and members itself.
client: Musikkapelle Nikolsdorf, East Tyrol
year: '2026'
role: Concept, design, development, hosting — solo
tools: Next.js 16 · React 19 · TypeScript · Payload CMS 3 · PostgreSQL · S3 media storage · Docker · Traefik · GitHub Actions
url: https://mk-nikolsdorf.at
cover:
  src: ../../assets/projects/mk-nikolsdorf/09_mobile_startseite.png
  position: centre
# Screenshots showing band members are used with permission (confirmed 2 October 2026).
gallery:
  - src: ../../assets/projects/mk-nikolsdorf/01_startseite_hero.png
    caption: Hero with the band in front of the East Tyrolean mountains
    focus: 45
  - src: ../../assets/projects/mk-nikolsdorf/02_startseite_intro.png
    caption: Introduction of the club with key figures and stamp logo
    focus: 100
  - src: ../../assets/projects/mk-nikolsdorf/04_startseite_termine_verein.png
    caption: Upcoming-events teaser on fir green
    focus: 5
  - src: ../../assets/projects/mk-nikolsdorf/06_aktuelles.png
    caption: News archive with posts from club life
    focus: 100
  - src: ../../assets/projects/mk-nikolsdorf/07_mitglieder.png
    caption: Members page with filter by instrument section
    focus: 100
  - src: ../../assets/projects/mk-nikolsdorf/08_termine.png
    caption: Event list grouped by month
stats:
  - value: '1840'
    label: Year the band was founded
  - value: '62'
    label: Active musicians on the website
  - value: '100'
    label: Lighthouse SEO
  - value: '4'
    label: Content types in the CMS
quote: Tradition on the programme, the present day in the code.
---

## The *challenge*

The club needed a website that can be maintained without a developer. Members should be able to publish news, parades and concerts themselves — and the whole thing had to run cheaply on a small server.

## The *solution*

- **Design:** Warm natural tones (fir green, brass gold, cream) derived from the traditional costume and the landscape, combined with a strong grotesque as the headline typeface. The group photo of the band in front of the East Tyrolean mountains carries the hero.
- **Content as a data model:** Payload collections for posts, events, members and media. The members page filters by instrument section, the events are grouped by month.
- **Operations:** A Docker Compose stack with Traefik as the reverse proxy on a VPS. Deployments run through a GitHub Action over SSH, media lives on its own S3 endpoint.
- **Privacy:** A cookie banner with a real choice — Google Analytics only loads after consent.

## The *result*

- Live in production; the club maintains its content itself through the Payload admin.
- Lighthouse (desktop, measured on 30 September 2026): Accessibility 94 · Best Practices 100 · SEO 100.
- 27 commits from June to September 2026, built entirely on my own.
