'use client';

import { useEffect } from 'react';

export function useAutoScroll(ref: React.RefObject<HTMLElement>, interval = 5000, step = 1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = window.setInterval(() => {
      el.scrollBy({ left: step * el.clientWidth * 0.8, behavior: 'smooth' });
    }, interval);
    return () => window.clearInterval(id);
  }, [ref, interval, step]);
}