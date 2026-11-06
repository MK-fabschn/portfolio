type Dir = 'up-right' | 'right' | 'left' | 'down';

const paths: Record<Dir, string> = {
  'up-right': 'M5 15 15 5M7 5h8v8',
  right: 'M3 10h14M11 4l6 6-6 6',
  left: 'M17 10H3M9 4l-6 6 6 6',
  down: 'M10 3v14M4 11l6 6 6-6',
};

/**
 * Drawn arrow instead of a text glyph: the site fonts have no arrows, so iOS would fall back to
 * Apple Color Emoji while desktop browsers pick a text font — this looks the same everywhere.
 */
export default function Arrow({ dir, className }: { dir: Dir; className?: string }) {
  return (
    <svg
      className={['arrow', className].filter(Boolean).join(' ')}
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[dir]} />
    </svg>
  );
}
