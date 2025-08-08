import Image from 'next/image';
import Link from 'next/link';
import Section from './ui/Section';

type Category = {
  id: string;
  name: string;
  href: string;
  image: string;
  alt?: string;
};

export default function CategoryGrid({ items }: { items: Category[] }) {
  return (
    <Section title="Shop by Category">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((c) => (
          <li key={c.id} className="group">
            <Link href={c.href} className="block overflow-hidden rounded-md border border-black/5 bg-white shadow-soft">
              <div className="relative aspect-[4/5] w-full">
                <Image src={c.image} alt={c.alt || c.name} fill sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 16vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-medium text-ink">{c.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}