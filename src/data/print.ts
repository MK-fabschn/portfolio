import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

/**
 * The two printed documents shown as a preview on the site, each with two downloads:
 * the digital version (interactive, RGB, links) and the print version (PDF/X-4, CMYK).
 * Copied from the hand-in folders (`Trutschnig-Portfolio/02_lebenslauf`, `03_print`, `04_interaktiv`), which are
 * exported from `04_Print/portfolio_interaktiv.indd`, `04_Print/Print-Portfolio.indd` and
 * `05_Lebenslauf/lebenslauf-digital.indd` / `lebenslauf-print.indd`; served from `public/`.
 */
export type PrintDoc = 'portfolio' | 'cv';

export const printDocs = ['portfolio', 'cv'] as const satisfies readonly PrintDoc[];

export interface PrintDownload {
  kind: 'digital' | 'print';
  href: string;
  /** What sets this file apart; the page adds the file size. */
  meta: Record<Lang, string>;
}

export const downloads: Record<PrintDoc, PrintDownload[]> = {
  portfolio: [
    {
      kind: 'digital',
      href: '/print/fabian-trutschnig-portfolio.pdf',
      meta: { de: 'Interaktiv · RGB · Lesezeichen und Links', en: 'Interactive · RGB · bookmarks and links' },
    },
    {
      kind: 'print',
      href: '/print/fabian-trutschnig-portfolio-druck.pdf',
      meta: { de: 'PDF/X-4 · CMYK · Druckbögen ohne Beschnitt', en: 'PDF/X-4 · CMYK · spreads without bleed' },
    },
  ],
  cv: [
    {
      kind: 'digital',
      href: '/print/fabian-trutschnig-lebenslauf.pdf',
      meta: { de: 'Interaktiv · RGB · Links', en: 'Interactive · RGB · links' },
    },
    {
      kind: 'print',
      href: '/print/fabian-trutschnig-lebenslauf-druck.pdf',
      meta: { de: 'PDF/X-4 · CMYK · 3 mm Beschnitt', en: 'PDF/X-4 · CMYK · 3 mm bleed' },
    },
  ],
};

/** What is printed where; each entry covers its first page up to the next entry's. */
const contents: Record<PrintDoc, { page: number; title: Record<Lang, string> }[]> = {
  portfolio: [
    { page: 1, title: { en: 'Front cover', de: 'Titelseite' } },
    { page: 2, title: { en: 'About me', de: 'Über mich' } },
    { page: 4, title: { en: '01 MK Nikolsdorf — club website', de: '01 MK Nikolsdorf — Vereinswebsite' } },
    { page: 6, title: { en: '02 Livora — luxury residences', de: '02 Livora — Luxus-Residenzen' } },
    { page: 8, title: { en: '03 VERO — learning platform', de: '03 VERO — Lernplattform' } },
    { page: 10, title: { en: '04 TK Ebene Reichenau — diploma thesis', de: '04 TK Ebene Reichenau — Diplomarbeit' } },
    { page: 12, title: { en: '05 FlipWise — flashcard app', de: '05 FlipWise — Karteikarten-App' } },
    { page: 14, title: { en: '06 FrameX — film database', de: '06 FrameX — Filmdatenbank' } },
    { page: 16, title: { en: '07 Noven — headless shop', de: '07 Noven — Headless-Shop' } },
    { page: 18, title: { en: 'Back cover — contact', de: 'Rückseite — Kontakt' } },
  ],
  cv: [
    {
      page: 1,
      title: {
        en: 'CV: about me, contact, work experience, education, skills, languages and interests',
        de: 'Lebenslauf: Über mich, Kontakt, Arbeitserfahrung, Ausbildung, Fähigkeiten, Sprachen und Freizeit',
      },
    },
  ],
};

// Rendered from the digital version (the portfolio without its on-screen navigation), 1654 × 2339 px (A4 at 200 dpi).
const pageFiles: Record<PrintDoc, Record<string, { default: ImageMetadata }>> = {
  portfolio: import.meta.glob('../assets/print/page-*.png', { eager: true }),
  cv: import.meta.glob('../assets/cv/page-*.png', { eager: true }),
};

/** The printed pages in order, each with an alt text naming the page and what is on it. */
export function printPages(doc: PrintDoc, lang: Lang) {
  const word = lang === 'de' ? 'Seite' : 'Page';
  const files = pageFiles[doc];
  return Object.keys(files)
    .sort()
    .map((path, i) => {
      const page = i + 1;
      const section = contents[doc].findLast((entry) => entry.page <= page)!;
      return { src: files[path].default, alt: `${word} ${page}: ${section.title[lang]}` };
    });
}
