import type { PropsWithChildren } from 'react';

export type ContainerProps = PropsWithChildren<{
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}>;

export default function Container({ children, className = '', size = 'xl' }: ContainerProps) {
    const maxWidthClasses = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-none'
    };

    const baseClasses = 'mx-auto w-full px-4 sm:px-6 lg:px-8';
    const containerClasses = `${baseClasses} ${maxWidthClasses[size]} ${className}`;

    return <div className={containerClasses}>{children}</div>;
}
