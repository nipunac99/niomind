import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niomind" },
      { name: "description", content: "Niomind is a digital agency focused on bold creative solutions: logos, websites, mobile apps and graphic design." },
      { property: "og:title", content: "About — Niomind" },
      { property: "og:description", content: "A studio with one purpose: provide creative solutions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero kicker="About" title="We exist to solve creative problems." subtitle="Niomind is a digital agency. Our sole purpose is to provide creative solutions for new businesses and established ones alike." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <h2 className="text-4xl md:text-5xl">A studio built around the work.</h2>
          <p className="mt-6 text-lg">
            We're a tight team of designers and strategists who love loud ideas and tight execution.
            We work across logo design, mobile app design, website design and graphic design — anything
            visual that helps a brand show up sharper.
          </p>
          <p className="mt-4 text-lg">
            Whether you're launching tomorrow or rebuilding a 20-year-old identity, we bring the same
            energy: clear thinking, bold systems, no fluff.
          </p>
        </div>
        <aside className="md:col-span-5">
          <div className="brutal-border brutal-shadow bg-acid p-6">
            <h3 className="text-2xl">Our principles</h3>
            <ul className="mt-4 space-y-3 font-medium">
              <li>→ Ideas over decoration.</li>
              <li>→ Systems, not one-offs.</li>
              <li>→ Ship work we'd sign.</li>
              <li>→ Be honest, be fast.</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-y-[3px] border-ink bg-ink py-20 text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          {[
            { n: "2019", l: "Studio founded" },
            { n: "240+", l: "Projects delivered" },
            { n: "30+", l: "Countries served" },
          ].map((s) => (
            <div key={s.l} className="brutal-border bg-paper p-8 text-ink">
              <div className="font-display text-6xl">{s.n}</div>
              <div className="mt-2 font-mono text-xs uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
