import type { PropsWithChildren } from 'react';
import Container from './Container';

export type SectionProps = PropsWithChildren<{
    title?: string;
    subtitle?: string;
    className?: string;
}>;

export default function Section({ title, subtitle, className, children }: SectionProps) {
    return (
        <section className={className}>
            <Container className="py-8 sm:py-10">
                {(title || subtitle) && (
                    <header className="mb-5 sm:mb-6">
                        {subtitle && <p className="text-sm text-ink/60">{subtitle}</p>}
                        {title && <h2 className="mt-1 text-xl font-semibold text-ink sm:text-2xl">{title}</h2>}
                    </header>
                )}
                {children}
            </Container>
        </section>
    );
}
