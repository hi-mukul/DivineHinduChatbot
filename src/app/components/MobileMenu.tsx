'use client';

import { useState } from 'react';
import Link from 'next/link';
import { nav } from '@/app/data/navigation';

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
                className="rounded-md border border-black/10 px-3 py-1 text-sm"
            >
                Menu
            </button>
            {open && (
                <div id="mobile-menu" className="absolute left-0 right-0 top-14 border-b border-black/5 bg-white p-3 shadow-soft">
                    <nav className="grid gap-2" aria-label="Mobile">
                        {nav.main.map((item) => (
                            <Link key={item.href} href={item.href} className="rounded px-2 py-1 text-sm text-ink hover:bg-black/5">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}
