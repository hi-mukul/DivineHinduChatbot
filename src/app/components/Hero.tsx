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
        <section className="bg-gradient-to-b from-brand-50 to-white">
            <Container className="relative" size="full">
                <div ref={scroller} className="flex snap-x snap-mandatory overflow-x-auto rounded-xl shadow-large [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {heroSlides.map((s) => (
                        <div key={s.id} className="relative aspect-[16/7] w-full shrink-0 snap-start group">
                            <Image src={s.image} alt={s.alt} fill className="object-cover transition-smooth group-hover:scale-105" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">{s.title}</h1>
                                <p className="mt-3 text-lg text-white/90 max-w-2xl">{s.subtitle}</p>
                                <Link
                                    href={s.cta.href}
                                    className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white shadow-medium hover:bg-brand-600 hover:shadow-large transition-smooth"
                                >
                                    {s.cta.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-6 hidden items-center gap-3 md:flex">
                    <button
                        className="pointer-events-auto rounded-full bg-white/95 p-3 shadow-medium hover:bg-white hover:shadow-large transition-smooth backdrop-blur-sm"
                        aria-label="Previous slide"
                        onClick={() => scrollBy(-1)}
                    >
                        <IconChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        className="pointer-events-auto rounded-full bg-white/95 p-3 shadow-medium hover:bg-white hover:shadow-large transition-smooth backdrop-blur-sm"
                        aria-label="Next slide"
                        onClick={() => scrollBy(1)}
                    >
                        <IconChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </Container>
        </section>
    );
}
