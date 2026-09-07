import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/Container';
import { nav } from '@/app/data/navigation';
import { site } from '@/app/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="https://www.divinehindu.in/cdn/shop/files/DiViNE_No_Moto_accd2ea5-e094-465c-8c81-92df29cbe192.png?v=1717481880" alt={site.name} width={160} height={40} />
            <p className="mt-3 max-w-sm text-sm text-ink/70">{site.footerBlurb}</p>
          </div>

          {nav.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link className="text-sm text-ink/70 hover:text-ink" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            <address className="mt-3 not-italic text-sm text-ink/70">
              {site.address.line1}<br />
              {site.address.line2}<br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-black/5 pt-6 text-xs text-ink-60">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.orgName}. All rights reserved.</p>
            <div className="flex gap-3">
              <Link href="/privacy" className="hover:text-ink">Privacy</Link>
              <Link href="/terms" className="hover:text-ink">Terms</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}