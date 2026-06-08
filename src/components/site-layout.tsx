import { Header, Footer } from "./site-chrome";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b-[3px] border-ink bg-acid">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {kicker && (
          <div className="mb-4 inline-block brutal-border bg-paper px-3 py-1 font-mono text-xs uppercase">
            {kicker}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg md:text-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
