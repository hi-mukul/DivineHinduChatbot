import type { HTMLAttributes } from 'react';

export default function RatingStars({ rating = 0, className, max = 5, ...rest }: { rating?: number; max?: number } & HTMLAttributes<HTMLDivElement>) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = max - full - (half ? 1 : 0);
    const stars = [
        ...Array(full).fill('full'),
        ...(half ? (['half'] as const) : []),
        ...Array(Math.max(0, empty)).fill('empty'),
    ];
    return (
        <div className={className} {...rest} aria-label={`${rating} out of ${max} stars`} role="img">
            {stars.map((t, i) => (
                <span key={i} aria-hidden className="inline-block text-[#F59E0B]">
                    {t === 'full' ? '★' : t === 'half' ? '☆' : '☆'}
                </span>
            ))}
        </div>
    );
}
