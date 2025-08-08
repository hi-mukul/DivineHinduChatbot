import type { PropsWithChildren } from 'react';

export default function VisuallyHidden({ children }: PropsWithChildren) {
    return <span className="sr-only">{children}</span>;
}
