'use client';

import Section from './ui/Section';

export default function Newsletter() {
  return (
    <Section className="bg-white" title="Stay in the loop" subtitle="Exclusive offers & updates">
      <form
        className="mx-auto max-w-xl rounded-lg border border-black/10 bg-white p-4 shadow-soft sm:flex sm:items-center sm:gap-3"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Newsletter subscription"
      >
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="mb-3 w-full rounded-md border border-black/10 px-3 py-2 text-sm outline-none placeholder:text-ink/50 focus:border-brand sm:mb-0 sm:flex-1"
        />
        <button className="inline-flex w-full items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto">
          Subscribe
        </button>
      </form>
    </Section>
  );
}