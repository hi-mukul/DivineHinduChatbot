'use client';

import { useRef } from 'react';
import ProductCard, { Product } from './ProductCard';
import Section from './ui/Section';
import { IconChevronLeft, IconChevronRight } from './ui/Icon';

export default function ProductCarousel({ title, items }: { title: string; items: Product[] }) {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(360, el.clientWidth * 0.8);
    el.scrollBy({ left: amount * dir, behavior: 'smooth' });
  };

  return (
    <Section title={title}>
      <div className="relative">
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label={`${title} products`}
        >
          {items.map((p) => (
            <div key={p.id} className="snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <button
            className="pointer-events-auto mr-2 hidden rounded-full bg-white/90 p-2 shadow-soft hover:bg-white focus-visible:ring-2 focus-visible:ring-ink sm:inline-flex"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
          >
            <IconChevronLeft />
          </button>
          <button
            className="pointer-events-auto hidden rounded-full bg-white/90 p-2 shadow-soft hover:bg-white focus-visible:ring-2 focus-visible:ring-ink sm:inline-flex"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
}