import type { LangLink } from '../i18n';

/** Shows the code of the other language ("DE" on English pages) and leads to the same page in it. */
export default function LangSwitch({ href, lang, label, name }: LangLink) {
  return (
    <a className="lang-switch" href={href} hrefLang={lang} lang={lang} aria-label={name}>
      {label}
    </a>
  );
}
