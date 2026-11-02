import type { Lang } from '../../i18n';
import LegalNotice from './LegalNotice.astro';
import Privacy from './Privacy.astro';
import Impressum from './Impressum.astro';
import Datenschutz from './Datenschutz.astro';

export type LegalKey = 'legal-notice' | 'privacy';

interface LegalDoc {
  /** Same in both languages: dialog id, footer `data-legal` and deep link (`/#privacy`). */
  key: LegalKey;
  title: string;
  href: string;
  Content: typeof LegalNotice;
}

export const legalDocs: Record<Lang, LegalDoc[]> = {
  en: [
    { key: 'legal-notice', title: 'Legal notice', href: '/legal-notice/', Content: LegalNotice },
    { key: 'privacy', title: 'Privacy', href: '/privacy/', Content: Privacy },
  ],
  de: [
    { key: 'legal-notice', title: 'Impressum', href: '/de/impressum/', Content: Impressum },
    { key: 'privacy', title: 'Datenschutz', href: '/de/datenschutz/', Content: Datenschutz },
  ],
};

export const legalDoc = (lang: Lang, key: LegalKey) => legalDocs[lang].find((doc) => doc.key === key)!;

/** URL of one legal page in each language, for the language switch. */
export const legalPaths = (key: LegalKey) => ({ en: legalDoc('en', key).href, de: legalDoc('de', key).href });
