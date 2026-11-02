/** German is the default and lives at `/`; English mirrors every page under `/en/`. */
export const langs = ['de', 'en'] as const;
export type Lang = (typeof langs)[number];

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'de' : 'en');

export const homePath: Record<Lang, string> = { de: '/', en: '/en/' };
export const projectsPath: Record<Lang, string> = { de: '/projekte/', en: '/en/projects/' };
export const printPath: Record<Lang, string> = { de: '/print-portfolio/', en: '/en/print-portfolio/' };
export const cvPath: Record<Lang, string> = { de: '/lebenslauf/', en: '/en/cv/' };

/** Strings shared by several components. Copy that belongs to one section stays in that section. */
export const ui = {
  en: {
    role: 'Web & App Developer · Graphic Designer',
    description:
      'Portfolio of Fabian Trutschnig — web & app developer and graphic designer based in East Tyrol, Austria.',
    location: 'East Tyrol · Remote',
    skipLink: 'Skip to content',
    home: 'home',
    nav: { services: 'Services', work: 'Work', about: 'About', contact: 'Contact' },
    mainNav: 'Main',
    mainMenu: 'Main menu',
    menu: 'Menu',
    allWork: 'All work',
    allProjects: 'All projects',
    backToTop: 'Back to top ↑',
    legal: 'Legal',
    close: 'Close',
    startProject: 'Start a project',
    /** How the link to this language announces itself on a page in the other language. */
    versionName: 'English version',
  },
  de: {
    role: 'Web- & App-Entwickler · Grafikdesigner',
    description:
      'Portfolio von Fabian Trutschnig — Web- & App-Entwickler und Grafikdesigner aus Osttirol, Österreich.',
    location: 'Osttirol · Remote',
    skipLink: 'Zum Inhalt springen',
    home: 'Startseite',
    nav: { services: 'Leistungen', work: 'Projekte', about: 'Über mich', contact: 'Kontakt' },
    mainNav: 'Hauptnavigation',
    mainMenu: 'Hauptmenü',
    menu: 'Menü',
    allWork: 'Alle Projekte',
    allProjects: 'Alle Projekte',
    backToTop: 'Nach oben ↑',
    legal: 'Rechtliches',
    close: 'Schließen',
    startProject: 'Projekt anfragen',
    versionName: 'Deutsche Version',
  },
} satisfies Record<Lang, unknown>;

export interface LangLink {
  href: string;
  lang: Lang;
  label: string;
  name: string;
}

/** The nav link to the same page in the other language; `paths` holds that page's URL per language. */
export function langLink(lang: Lang, paths: Record<Lang, string>): LangLink {
  const to = otherLang(lang);
  return { href: paths[to], lang: to, label: to.toUpperCase(), name: ui[to].versionName };
}
