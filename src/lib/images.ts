import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Plain data for an `<img>` tag, so optimized images can be handed to React islands as props. */
export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

interface Crop {
  /** width / height */
  aspect: number;
  /** sharp gravity, e.g. "top", "left", "centre" */
  position: string;
}

/**
 * Renders `src` as WebP in the given widths, optionally cropped to a fixed aspect ratio.
 * Astro caps the widths at the original size. `src` is only ever handed to `getImage`:
 * reading its properties here would make Astro ship the unoptimized original as well.
 */
export async function responsiveImage(src: ImageMetadata, widths: number[], crop?: Crop): Promise<ResponsiveImage> {
  const largest = Math.max(...widths);
  const image = await getImage({
    src,
    format: 'webp',
    widths,
    ...(crop
      ? { width: largest, height: Math.round(largest / crop.aspect), fit: 'cover', position: crop.position }
      : {}),
  });
  return {
    src: image.src,
    srcSet: image.srcSet.attribute,
    width: Number(image.attributes.width),
    height: Number(image.attributes.height),
  };
}

const homeImages = import.meta.glob<{ default: ImageMetadata }>('../assets/home/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

/**
 * Optional photos for the home page. Drop a file named `portrait`, `signature` or `about`
 * (any of the extensions above) into `src/assets/home/` and the matching slot fills itself.
 */
export function homeImage(name: 'portrait' | 'signature' | 'about'): ImageMetadata | undefined {
  const match = Object.entries(homeImages).find(([path]) => path.split('/').pop()?.startsWith(`${name}.`));
  return match?.[1].default;
}
