import { site } from '../data/site';

interface Props {
  logoSrc: string;
  role: string;
  /** Accessible name of the home page, e.g. "home". */
  homeLabel: string;
  href: string;
}

export default function Brand({ logoSrc, role, homeLabel, href }: Props) {
  const [first, ...rest] = site.name.split(' ');
  return (
    <a className="brand" href={href} aria-label={`${site.name} — ${homeLabel}`}>
      <img src={logoSrc} alt="" width="30" height="40" />
      <span className="brand-rule" />
      <span className="brand-text">
        <span className="brand-name">
          {first}
          <br />
          {rest.join(' ')}
        </span>
        <span className="brand-role">{role}</span>
      </span>
    </a>
  );
}
