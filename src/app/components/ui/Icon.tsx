import type { SVGProps } from 'react';

export function IconChevronLeft(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden fill="none" stroke="currentColor" strokeWidth={2.5} {...props}>
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

export function IconChevronRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden fill="none" stroke="currentColor" strokeWidth={2.5} {...props}>
            <path d="M9 6l6 6-6 6" />
        </svg>
    );
}
