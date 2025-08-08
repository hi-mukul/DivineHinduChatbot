'use client';

import Section from './ui/Section';

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <Section title="What our customers say" className="bg-white">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.id} className="rounded-lg border border-black/5 bg-white p-4 shadow-soft">
            <blockquote className="text-ink/80">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-medium text-ink">
              {t.author} {t.role ? <span className="text-ink/60">— {t.role}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}