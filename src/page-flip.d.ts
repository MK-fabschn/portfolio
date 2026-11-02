/** The parts of StPageFlip's API the print portfolio uses; the package ships no types. */
declare module 'page-flip/dist/js/page-flip.module.js' {
  export interface PageFlipSettings {
    width: number;
    height: number;
    size?: 'fixed' | 'stretch';
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    showCover?: boolean;
    usePortrait?: boolean;
    autoSize?: boolean;
    mobileScrollSupport?: boolean;
    maxShadowOpacity?: number;
    flippingTime?: number;
    drawShadow?: boolean;
    showPageCorners?: boolean;
  }

  export class PageFlip {
    constructor(element: HTMLElement, settings: PageFlipSettings);
    loadFromHTML(pages: NodeListOf<HTMLElement> | HTMLElement[]): void;
    flipNext(corner?: 'top' | 'bottom'): void;
    flipPrev(corner?: 'top' | 'bottom'): void;
    /** Shows the page straight away, without turning over the pages in between. */
    turnToPage(index: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    getOrientation(): 'portrait' | 'landscape';
    on(event: 'flip', handler: (e: { data: number }) => void): this;
    on(event: 'changeOrientation', handler: (e: { data: 'portrait' | 'landscape' }) => void): this;
    on(event: 'init', handler: () => void): this;
  }
}
