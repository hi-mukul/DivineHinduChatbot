import type { PropsWithChildren } from 'react';
import Container from './Container';

export type SectionProps = PropsWithChildren<{
    title?: string;
    subtitle?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    centered?: boolean;
}>;

export default function Section({
    title,
    subtitle,
    className = '',
    size = 'md',
    centered = false,
    children
}: SectionProps) {
    const paddingClasses = {
        sm: 'py-8 sm:py-12',
        md: 'py-12 sm:py-16 lg:py-20',
        lg: 'py-16 sm:py-20 lg:py-24'
    };

    const headerClasses = centered ? 'text-center' : '';
    const containerClasses = centered ? 'text-center' : '';

    return (
        <section className={`transition-smooth ${className}`}>
            <Container className={`${paddingClasses[size]} ${containerClasses}`}>
                {(title || subtitle) && (
                    <header className={`mb-8 sm:mb-12 ${headerClasses}`}>
                        {subtitle && (
                            <p className="text-sm font-medium tracking-wide uppercase text-brand mb-3">
                                {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                                {title}
                            </h2>
                        )}
                    </header>
                )}
                {children}
            </Container>
        </section>
    );
}
