'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Container from './ui/Container';
import { IconChevronLeft, IconChevronRight } from './ui/Icon';
import { heroSlides } from '@/app/data/hero';

export default function Hero() {
    const scroller = useRef<HTMLDivElement | null>(null);
    const scrollBy = (dir: -1 | 1) => {
        const el = scroller.current;
        if (!el) return;
        el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
    };

    return (
        <section className="bg-white">
            <Container className="relative">
                <div ref={scroller} className="flex snap-x snap-mandatory overflow-x-auto rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {heroSlides.map((s) => (
                        <div key={s.id} className="relative aspect-[16/7] w-full shrink-0 snap-start">
                            <Image src={s.image} alt={s.alt} fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-50%" />
                            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                <h1 className="text-2xl font-semibold md:text-3xl">{s.title}</h1>
                                <p className="mt-1 text-white/90">{s.subtitle}</p>
                                <Link href={s.cta.href} className="mt-3 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-ink">
                                    {s.cta.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-3 hidden items-center gap-2 md:flex">
                    <button className="pointer-events-auto rounded-full bg-white/90 p-2 shadow-soft" aria-label="Prev" onClick={() => scrollBy(-1)}>
                        <IconChevronLeft />
                    </button>
                    <button className="pointer-events-auto rounded-full bg-white/90 p-2 shadow-soft" aria-label="Next" onClick={() => scrollBy(1)}>
                        <IconChevronRight />
                    </button>
                </div>
            </Container>
        </section>
    );
}
