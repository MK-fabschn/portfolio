import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n';

/** Web export of `04_Print/Print-Portfolio.indd`, served from `public/`. */
export const printPdf = '/print/fabian-trutschnig-print-portfolio.pdf';

/** What is printed where; each entry covers its first page up to the next entry's. */
const contents: { page: number; title: Record<Lang, string> }[] = [
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
];

const pageFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/print/page-*.png', { eager: true });

/** The printed pages in order, each with an alt text naming the page and what is on it. */
export function printPages(lang: Lang) {
  const word = lang === 'de' ? 'Seite' : 'Page';
  return Object.keys(pageFiles)
    .sort()
    .map((path, i) => {
      const page = i + 1;
      const section = contents.findLast((entry) => entry.page <= page)!;
      return { src: pageFiles[path].default, alt: `${word} ${page}: ${section.title[lang]}` };
    });
}
