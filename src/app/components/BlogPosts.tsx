import Image from 'next/image';
import Link from 'next/link';
import Section from './ui/Section';

type Post = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  alt?: string;
  date?: string;
};

export default function BlogPosts({ items }: { items: Post[] }) {
  return (
    <Section title="From the blog" subtitle="Latest stories">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-md border border-black/5 bg-white shadow-soft">
            <Link href={p.href} className="relative block aspect-[16/10]">
              <Image src={p.image} alt={p.alt || p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-base font-semibold text-ink">
                <Link href={p.href}>{p.title}</Link>
              </h3>
              {p.date && <p className="mt-1 text-xs text-ink-60">{p.date}</p>}
              <p className="mt-2 line-clamp-3 text-sm text-ink/80">{p.excerpt}</p>
              <Link href={p.href} className="mt-3 inline-flex text-sm font-medium text-brand hover:underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}