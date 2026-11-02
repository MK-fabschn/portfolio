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
  /** Meta description of the standalone page. */
  description: string;
  href: string;
  Content: typeof LegalNotice;
}

export const legalDocs: Record<Lang, LegalDoc[]> = {
  en: [
    { key: 'legal-notice', title: 'Legal notice', description: 'Legal notice of the private portfolio of Fabian Trutschnig: disclosure under § 25(5) of the Austrian Media Act.', href: '/en/legal-notice/', Content: LegalNotice },
    { key: 'privacy', title: 'Privacy', description: 'Privacy policy of fabian-trutschnig.dev: hosting, Cloudflare, e-mail contact, no cookies and your rights under the GDPR.', href: '/en/privacy/', Content: Privacy },
  ],
  de: [
    { key: 'legal-notice', title: 'Impressum', description: 'Impressum des privaten Portfolios von Fabian Trutschnig: Offenlegung nach § 25 Abs. 5 Mediengesetz.', href: '/impressum/', Content: Impressum },
    { key: 'privacy', title: 'Datenschutz', description: 'Datenschutzerklärung von fabian-trutschnig.dev: Hosting, Cloudflare, Kontakt per E-Mail, keine Cookies und Ihre Rechte nach der DSGVO.', href: '/datenschutz/', Content: Datenschutz },
  ],
};

export const legalDoc = (lang: Lang, key: LegalKey) => legalDocs[lang].find((doc) => doc.key === key)!;

/** URL of one legal page in each language, for the language switch. */
export const legalPaths = (key: LegalKey) => ({ en: legalDoc('en', key).href, de: legalDoc('de', key).href });
