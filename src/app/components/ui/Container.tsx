import type { PropsWithChildren } from 'react';

export type ContainerProps = PropsWithChildren<{
    className?: string;
}>;

export default function Container({ children, className }: ContainerProps) {
    const base = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';
    const cls = className ? `${base} ${className}` : base;
    return <div className={cls}>{children}</div>;
}
