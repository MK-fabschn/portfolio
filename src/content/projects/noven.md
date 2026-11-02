---
order: 7
title: Noven
kind: Headless shop
summary: Headless shop · Sulu & Next.js
label: Headless CMS · E-commerce · Team
categories: [app]
lead: Furniture that lasts — a headless shop with Sulu as the CMS and Next.js as the frontend.
description: >-
  Noven is a furniture shop whose range lives in the CMS: products are maintained in Sulu and delivered through a REST API
  to a Next.js frontend — with a collection, cart, wishlist, checkout and customer account.
context: HTL Villach · Web & app development, 4th year
year: '2026'
role: Team project (team of two)
tools: Sulu 3 · Symfony 7.4 · PHP 8.3 · MariaDB 11.4 · Next.js 16 · React 19 · TypeScript · Better Auth · Kysely · Docker
cover:
  src: ../../assets/projects/noven/07_produkt_detail.png
  position: left
gallery:
  - src: ../../assets/projects/noven/01_startseite_hero.png
    caption: Hero slider “Gestalten Sie Ihren Komfort”
  - src: ../../assets/projects/noven/03_startseite_kategorien.png
    caption: Categories on the home page
    focus: 30
  - src: ../../assets/projects/noven/06_kollektion_raster.png
    caption: Collection with category filter
  - src: ../../assets/projects/noven/07_produkt_detail.png
    caption: Product page with tabs and recommendations
  - src: ../../assets/projects/noven/08_warenkorb.png
    caption: Cart as a drawer
  - src: ../../assets/projects/noven/15_sulu_admin_produktliste.png
    caption: Product list in the Sulu admin interface
credits: 'Photos: Unsplash · all products, prices and “Noven GmbH” are invented'
stats:
  - value: '36'
    label: Products in 6 categories, maintained in the CMS
  - value: '2'
    label: 'Systems: Sulu delivers, Next.js displays'
  - value: '10'
    label: Pages in the frontend, from home to checkout
  - value: '1'
    label: Command for the complete demo content
quote: The shop knows nothing about furniture. The CMS does.
---

## The *challenge*

Before the diploma thesis we wanted to know what Sulu feels like as a headless CMS: how does content reach the frontend as JSON, how do you extend a content type, and how far does the CMS carry when it is supposed to become a shop?

## The *solution*

- **Product as a content type:** The Sulu article was extended into a product — price, category, image and description as additional fields in the XML template, maintained in the regular admin interface.
- **A custom list API:** A controller serves `/api/articles` with resolved product fields. Pagination runs over the IDs first and then loads only the content of the current page — otherwise `LIMIT` cuts off products because of the joins.
- **Seed command:** `app:seed-demo` creates six categories, a media collection and 36 products and publishes them — through the same Sulu services the admin interface uses.
- **Frontend:** Next.js App Router, a home page with hero slider, bestseller strip and categories, a collection with filter, a product page with tabs and recommendations, the cart as a drawer, a wishlist and checkout.
- **Account:** Registration and login with Better Auth, a protected account area with order history, personal data and delivery address.
- **Design:** Cormorant Garamond in light weights, DM Sans for the interface, sage green as the only colour accent — lots of white, large images.

## The *rework*

For the portfolio the shop was reworked in October 2026:

- **Photos instead of colour blocks:** Hero, categories and all 36 products only showed single-colour placeholders. Now they have photos; the seed command uploads the product images to Sulu's media library automatically.
- **Local fonts:** Cormorant Garamond and DM Sans come from npm packages instead of the Google CDN.
- **Small things:** A category counter corrected, the year in the hero updated, the logo on the registration page no longer hidden under the navigation.
