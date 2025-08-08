import Image from 'next/image';
import Section from './ui/Section';

type Feature = {
  id: string;
  icon: string; // local path
  title: string;
  text: string;
  alt?: string;
};

export default function Features({ items }: { items: Feature[] }) {
  return (
    <Section className="bg-white" title="Our Services" subtitle="Why choose us">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((f) => (
          <li key={f.id} className="flex items-start gap-3 rounded-lg border border-black/5 bg-white p-4 shadow-soft">
            <Image src={f.icon} alt={f.alt || f.title} width={36} height={36} className="shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}