import { useRef, useState } from 'react';
import type { ResponsiveImage } from '../lib/images';

export interface Slide {
  image: ResponsiveImage;
  caption: string;
  /** Vertical position of the excerpt in percent: 0 = top of the image, 100 = bottom. */
  focus: number;
  fit: 'cover' | 'contain';
}

export interface CarouselLabels {
  group: string;
  track: string;
  prev: string;
  next: string;
  /** Prefix of each dot's name: "Image" → "Image 3". */
  image: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * The track is a native scroll-snap container, so dragging, momentum and the bounce at the
 * ends come from the browser. Buttons and dots only scroll it; the current slide is read
 * back from the scroll position.
 */
export default function Carousel({ slides, labels }: { slides: Slide[]; labels: CarouselLabels }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = slides.length;

  /** The slide in view follows from the scroll position, so it can never disagree with what is shown. */
  const syncIndex = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setIndex(Math.min(count - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth))));
  };

  const go = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: next * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="carousel" role="group" aria-roledescription="carousel" aria-label={labels.group}>
      <div className="carousel-frame">
        <div
          className="carousel-track"
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label={labels.track}
          onScroll={syncIndex}
        >
          {slides.map((slide, i) => (
            <div className="carousel-slide" key={slide.image.src}>
              <img
                src={slide.image.src}
                srcSet={slide.image.srcSet}
                sizes="(min-width: 1440px) 1328px, 92vw"
                width={slide.image.width}
                height={slide.image.height}
                alt={slide.caption}
                style={{ objectFit: slide.fit, objectPosition: `50% ${slide.focus}%` }}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            </div>
          ))}
        </div>
        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel-btn prev"
              aria-label={labels.prev}
              disabled={index === 0}
              onClick={() => go(index - 1)}
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-btn next"
              aria-label={labels.next}
              disabled={index === count - 1}
              onClick={() => go(index + 1)}
            >
              →
            </button>
          </>
        )}
      </div>
      <div className="carousel-meta">
        <div className="carousel-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.image.src}
              type="button"
              className="carousel-dot"
              aria-label={`${labels.image} ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <p className="carousel-caption" aria-live="polite">
          {slides[index].caption}
        </p>
        <span className="carousel-count">
          {pad(index + 1)} / {pad(count)}
        </span>
      </div>
    </div>
  );
}
