import { homePath, ui, type Lang } from '../i18n';

export const site = {
  name: 'Fabian Trutschnig',
  email: 'fabi.trutschnig@aon.at',
  /** Place of residence for the § 25 MedienG disclosure: town only, never the street (private site). */
  residence: '9782 Nikolsdorf',
  /** Only links with a URL are rendered. */
  socials: [{ label: 'GitHub', url: '' }],
};

const sections = ['services', 'work', 'about', 'contact'] as const;
export type Section = (typeof sections)[number];

export const navLinks = (lang: Lang) =>
  sections.map((id) => ({ id, label: ui[lang].nav[id], href: `${homePath[lang]}#${id}` }));
