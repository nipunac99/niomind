import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";

import { Calendar, User, Tag, X } from "lucide-react";
import { PageHero, SiteLayout } from "../components/site-layout";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/ui/dialog";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Niomind" },
      { name: "description", content: "Selected work across logo design, brand identity, website design and mobile app design." },
      { property: "og:title", content: "Portfolio — Niomind" },
      { property: "og:description", content: "Selected work from the Niomind studio." },
    ],
  }),
  component: PortfolioPage,
});

type Category = "Logo Design" | "Brand Identity" | "Website Design" | "Mobile App Design";

type Work = {
  title: string;
  client: string;
  category: Category;
  bg: string;
  fg: string;
  visual: "mark" | "grid" | "site" | "phone";
  duration: string;
  description: string;
};

const works: Work[] = [
  { title: "Northwind", client: "Logistics co.", category: "Logo Design", bg: "bg-acid", fg: "text-ink", visual: "mark", duration: "2 weeks", description: "A bold monogram for a regional logistics carrier. The mark balances industrial weight with the directional energy of a compass needle." },
  { title: "Foxtrot", client: "Music label", category: "Logo Design", bg: "bg-ink", fg: "text-paper", visual: "mark", duration: "3 weeks", description: "An identity for an indie music label. Sharp, high-contrast letterforms pressed against negative space to feel like a vinyl sleeve." },
  { title: "Granite", client: "Outdoor gear", category: "Logo Design", bg: "bg-hot", fg: "text-white", visual: "mark", duration: "2 weeks", description: "Rugged wordmark and primary mark for an outdoor gear brand. Built to survive embroidery, embossing and harsh weather." },

  { title: "Helio", client: "Solar startup", category: "Brand Identity", bg: "bg-sun", fg: "text-ink", visual: "grid", duration: "6 weeks", description: "Full identity system for a residential solar startup — logo, palette, typography, iconography, signage and pitch templates." },
  { title: "Kin + Kind", client: "Family clinic", category: "Brand Identity", bg: "bg-paper", fg: "text-ink", visual: "grid", duration: "5 weeks", description: "Warm, approachable identity for a multi-location family clinic. Print collateral, wayfinding and a friendly illustration library." },
  { title: "Maven", client: "Consultancy", category: "Brand Identity", bg: "bg-electric", fg: "text-white", visual: "grid", duration: "8 weeks", description: "A confident rebrand for a strategy consultancy. Editorial-grade typography paired with a sharp electric accent system." },

  { title: "Pixelforge", client: "Game studio", category: "Website Design", bg: "bg-ink", fg: "text-acid", visual: "site", duration: "7 weeks", description: "Marketing site and press kit for an indie game studio. Heavy hero animations, scroll-driven storytelling and a built-in devlog." },
  { title: "Atlas & Co", client: "Travel brand", category: "Website Design", bg: "bg-hot", fg: "text-white", visual: "site", duration: "9 weeks", description: "A booking and editorial site for a boutique travel brand. Tactile imagery, magazine-style layouts and a custom itinerary builder." },
  { title: "Rune", client: "Wellness app", category: "Website Design", bg: "bg-acid", fg: "text-ink", visual: "site", duration: "4 weeks", description: "Landing experience for a wellness app launch. Quiet typography, generous whitespace and a frictionless waitlist flow." },

  { title: "Orbital", client: "Fitness app", category: "Mobile App Design", bg: "bg-electric", fg: "text-white", visual: "phone", duration: "10 weeks", description: "End-to-end product design for a fitness coaching app. Onboarding, workout player, progress tracking and a social feed." },
  { title: "Volt", client: "EV charging", category: "Mobile App Design", bg: "bg-sun", fg: "text-ink", visual: "phone", duration: "12 weeks", description: "Native iOS and Android design for an EV charging network. Live station availability, payments and trip planning baked in." },
  { title: "Meridian", client: "Banking", category: "Mobile App Design", bg: "bg-ink", fg: "text-paper", visual: "phone", duration: "14 weeks", description: "A challenger bank's flagship app. Account opening in under three minutes, budgeting tools and a friction-free transfer flow." },
];

const categories: ("All" | Category)[] = ["All", "Logo Design", "Brand Identity", "Website Design", "Mobile App Design"];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Work | null>(null);
  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <SiteLayout>
      <PageHero kicker="Portfolio" title="Selected work." subtitle="A slice of recent projects across logo, brand identity, web and mobile. Tap any piece for a quick view." />

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`brutal-border px-4 py-2 font-display text-sm uppercase ${
                  isActive ? "bg-ink text-paper brutal-shadow-sm" : "bg-paper hover:bg-acid"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(w)}
              className="group brutal-border brutal-shadow brutal-hover bg-paper text-left"
              aria-label={`Quick view ${w.title}`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink ${w.bg} ${w.fg}`}>
                <WorkVisual work={w} />
                <span className="absolute right-3 top-3 brutal-border bg-paper px-2 py-1 font-mono text-[10px] uppercase text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  Quick view
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="font-display text-lg uppercase">{w.title}</div>
                  <div className="font-mono text-xs">{w.client}</div>
                </div>
                <span className="brutal-border bg-acid px-2 py-1 font-mono text-[10px] uppercase">{w.category}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl border-[3px] border-ink bg-paper p-0 sm:rounded-none [&>button]:hidden">
          {selected && (
            <div className="grid md:grid-cols-2">
              <div className={`relative aspect-square md:aspect-auto border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink ${selected.bg} ${selected.fg}`}>
                <WorkVisual work={selected} />
              </div>
              <div className="relative p-6 md:p-8">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 brutal-border bg-paper p-1.5 hover:bg-acid"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <span className="brutal-border inline-block bg-acid px-2 py-1 font-mono text-[10px] uppercase">
                  {selected.category}
                </span>
                <DialogTitle className="mt-3 font-display text-3xl uppercase leading-none">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="mt-4 font-sans text-base text-ink/80">
                  {selected.description}
                </DialogDescription>

                <dl className="mt-6 space-y-3 font-mono text-xs uppercase">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <dt className="text-ink/60">Client:</dt>
                    <dd>{selected.client}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <dt className="text-ink/60">Duration:</dt>
                    <dd>{selected.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <dt className="text-ink/60">Category:</dt>
                    <dd>{selected.category}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}

function WorkVisual({ work }: { work: Work }) {
  if (work.visual === "mark") {
    const letter = work.title[0];
    return (
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-32 w-32 place-items-center border-[6px] border-current">
          <span className="font-display text-7xl">{letter}</span>
        </div>
      </div>
    );
  }
  if (work.visual === "grid") {
    return (
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="border-[3px] border-current" style={{ opacity: 0.3 + (i % 3) * 0.25 }} />
        ))}
        <div className="absolute bottom-4 left-4 font-display text-2xl">{work.title.toUpperCase()}</div>
      </div>
    );
  }
  if (work.visual === "site") {
    return (
      <div className="absolute inset-0 p-4">
        <div className="h-3 w-1/3 bg-current" />
        <div className="mt-3 h-6 w-2/3 bg-current opacity-80" />
        <div className="mt-2 h-6 w-1/2 bg-current opacity-60" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-12 border-[3px] border-current" />
          <div className="h-12 border-[3px] border-current" />
          <div className="h-12 border-[3px] border-current" />
        </div>
        <div className="absolute bottom-3 right-3 brutal-border bg-current px-2 py-1 font-mono text-[10px]" style={{ color: "var(--paper)" }}>
          {work.title.toUpperCase()}
        </div>
      </div>
    );
  }
  // phone
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-[80%] w-[42%] border-[4px] border-current">
        <div className="absolute left-1/2 top-1 h-1.5 w-10 -translate-x-1/2 bg-current" />
        <div className="m-3 mt-6 space-y-2">
          <div className="h-3 w-full bg-current opacity-80" />
          <div className="h-3 w-2/3 bg-current opacity-60" />
          <div className="mt-3 h-12 border-[3px] border-current" />
          <div className="h-12 border-[3px] border-current" />
        </div>
      </div>
    </div>
  );
}
