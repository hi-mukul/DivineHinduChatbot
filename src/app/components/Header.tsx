'use client';

import Link from 'next/link';
import Container from './ui/Container';
import MobileMenu from './MobileMenu';
import { nav } from '@/app/data/navigation';
import { site } from '@/app/data/site';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-default bg-white/95 backdrop-blur-md shadow-soft transition-smooth">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold text-ink hover:text-brand transition-fast" aria-label={site.name}>
                    {site.shortName}
                </Link>
                <nav className="hidden gap-8 sm:flex" aria-label="Main">
                    {nav.main.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-ink-light hover:text-brand transition-fast relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
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
