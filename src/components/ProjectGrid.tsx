import { useRef, useState, type CSSProperties } from 'react';
import { flushSync } from 'react-dom';
import type { ResponsiveImage } from '../lib/images';

export interface ProjectCard {
  href: string;
  no: string;
  title: string;
  summary: string;
  label: string;
  categories: string[];
  image: ResponsiveImage;
}

interface Props {
  projects: ProjectCard[];
  filters: { key: string; label: string }[];
  labels: { filterBy: string; all: string; loadMore: string };
}

const ALL = 'all';
/** Cards shown at first and added per "load more". */
const PAGE_SIZE = 6;

export default function ProjectGrid({ projects, filters, labels }: Props) {
  const [active, setActive] = useState(ALL);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const listRef = useRef<HTMLUListElement>(null);
  const matching = active === ALL ? projects : projects.filter((p) => p.categories.includes(active));
  const shown = matching.slice(0, limit);

  /** Cards glide to their new places instead of jumping (where the browser supports view transitions). */
  const pick = (key: string) => {
    const update = () => {
      setActive(key);
      setLimit(PAGE_SIZE);
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) return update();
    document.startViewTransition(() => flushSync(update));
  };

  /** Focus moves to the first new card, so keyboard users continue where the new cards start. */
  const loadMore = () => {
    const firstNew = shown.length;
    flushSync(() => setLimit((current) => current + PAGE_SIZE));
    listRef.current?.querySelectorAll<HTMLAnchorElement>('.card')[firstNew]?.focus();
  };

  return (
    <>
      <div className="filter-row">
        <span className="kicker">{labels.filterBy}</span>
        <div className="filter-list">
          {[{ key: ALL, label: labels.all }, ...filters].map((filter) => (
            <button
              key={filter.key}
              type="button"
              className="filter-btn"
              aria-pressed={filter.key === active}
              onClick={() => pick(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="project-grid" ref={listRef}>
        {shown.map((project) => (
          // The name goes in as a custom property; global.css turns it into view-transition-name.
          <li key={project.href} style={{ '--vt-name': `card-${project.no}` } as CSSProperties}>
            <a className="card" href={project.href}>
              <span className="card-label">{project.label}</span>
              <span className="card-image">
                <img
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  sizes="(min-width: 1000px) 30vw, (min-width: 640px) 46vw, 92vw"
                  width={project.image.width}
                  height={project.image.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="card-foot">
                <span className="card-no outline-no" aria-hidden="true">
                  {project.no}
                </span>
                <span>
                  <span className="card-title">{project.title}</span>
                  <span className="card-summary">{project.summary}</span>
                </span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {matching.length > shown.length && (
        <div className="load-more-row">
          <button type="button" className="load-more" onClick={loadMore}>
            {labels.loadMore} <span aria-hidden="true">↓</span>
          </button>
        </div>
      )}
    </>
  );
}
