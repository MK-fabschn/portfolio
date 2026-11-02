---
order: 4
title: TK Ebene Reichenau
kind: Diploma thesis
summary: Diploma thesis · Sulu, Twig & Next.js
label: Diploma thesis · Client project · Team
categories: [web]
lead: One CMS, two frontends — the new website of the Trachtenkapelle Ebene Reichenau as a diploma thesis.
description: >-
  The same club website, built twice: once the classic way with Twig straight from the CMS, once headless with Next.js.
  The diploma thesis compares both approaches on a real client project.
client: Trachtenkapelle Ebene Reichenau, Carinthia
year: '2026'
role: Development of both frontends and the Sulu backend in a team of two (162 of 312 commits)
tools: Sulu 3 · Symfony 7.4 · PHP 8.4 · MariaDB · Twig · Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Webpack Encore · Biome · DDEV
cover:
  src: ../../assets/projects/tk-ebene-reichenau/16_mobile_startseite_top.png
  position: top
# Images with identifiable people, names or the club's crest are deliberately left out.
# Once the club has agreed, copy them from 01_Datensammlung/04_TK-Ebene-Reichenau/bilder to
# src/assets/projects/tk-ebene-reichenau and list them here and in de/tk-ebene-reichenau.md,
# e.g. 01_startseite_hero.png, 09_mitglieder.png, 20_next_startseite_hero.png.
gallery:
  - src: ../../assets/projects/tk-ebene-reichenau/03_startseite_termine.png
    caption: Upcoming performances on the home page
  - src: ../../assets/projects/tk-ebene-reichenau/11_termine.png
    caption: This year's event list
  - src: ../../assets/projects/tk-ebene-reichenau/13_chronik_zeitstrahl.png
    caption: Chronicle as a timeline
    focus: 100
  - src: ../../assets/projects/tk-ebene-reichenau/19_mobile_termine.png
    caption: Mobile view of the events (390 px)
    fit: contain
stats:
  - value: '2'
    label: Frontends on one CMS (Twig and Next.js)
  - value: '15'
    label: Content blocks, each built twice
  - value: '312'
    label: Commits in five weeks, 162 of them mine
  - value: '59'
    label: Pull requests
quote: Same content, same design — and still two different websites.
---

## The *challenge*

The band needed a new website that the club maintains itself: events, posts with photo albums, around 70 members by instrument section, a chronicle going back to 1932. For the diploma thesis a second question came on top: is a headless frontend really worth it for a project like this — or is server-side Twig enough?

## The *solution*

- **Two webspaces, one backend:** Sulu delivers the same content as HTML (Twig) and as JSON (Next.js). A format policy keeps the two strictly apart — the headless webspace answers HTML requests with 406.
- **Content as building blocks:** 11 page templates and 15 blocks (hero, event list, member list, chronicle section, news feed, contact form …). Every block exists as an XML definition, a Twig template and a React component.
- **Template registry in Next.js:** A catch-all route loads the page as JSON, and a registry picks the matching component from the template key. Sulu's live preview runs through `postMessage` into the same rendering.
- **Performance as a measured quantity:** Two image strategies (the Next optimizer with AVIF/WebP against Sulu's renditions) can be switched and were measured against each other — LCP on the members page 1.94 s against 2.43 s.
- **Security & privacy:** Content Security Policy and security headers on both stacks, a contact form with token and honeypot, Google Analytics only after consent.
- **Design:** Dark fir green, plenty of white space, a calm grotesque — the club's crest as the only ornament in the hero.
