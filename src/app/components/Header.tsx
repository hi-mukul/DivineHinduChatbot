'use client';

import Link from 'next/link';
import Container from './ui/Container';
import MobileMenu from './MobileMenu';
import { nav } from '@/app/data/navigation';
import { site } from '@/app/data/site';

export default function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur">
            <Container className="flex h-14 items-center justify-between">
                <Link href="/" className="text-lg font-semibold text-ink" aria-label={site.name}>
                    {site.shortName}
                </Link>
                <nav className="hidden gap-6 sm:flex" aria-label="Main">
                    {nav.main.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-ink/70 hover:text-ink">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="sm:hidden">
                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}
