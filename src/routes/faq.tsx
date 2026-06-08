import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { PageHero, SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Niomind" },
      { name: "description", content: "Answers to common questions about working with Niomind: process, timelines, pricing and deliverables." },
      { property: "og:title", content: "FAQ — Niomind" },
      { property: "og:description", content: "Common questions about working with Niomind." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What services do you offer?", a: "Logo design, mobile app design, website design and graphic design — plus brand identity systems and design strategy." },
  { q: "How long does a typical project take?", a: "Logos: 2–3 weeks. Websites: 4–8 weeks. Mobile apps: 6–12 weeks. We'll give you a fixed schedule before kickoff." },
  { q: "Do you work with startups or only big brands?", a: "Both. We love early-stage founders and we partner with established teams that want to level up." },
  { q: "How much does a project cost?", a: "Projects start from $2,500 for logos and $8,000 for websites. Send a brief — we'll quote within 48 hours." },
  { q: "Do you handle development too?", a: "Yes — for websites we design and build. For mobile apps we design and partner with vetted engineering teams." },
  { q: "Who owns the work?", a: "You do. On final invoice, full IP transfers to you, including source files." },
  { q: "Where are you based?", a: "We're a distributed studio working with clients worldwide. Calls in your timezone, async in ours." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHero kicker="FAQ" title="Questions, answered." subtitle="Don't see what you're looking for? Drop us a line — we reply within a day." />
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-8">
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="brutal-border brutal-shadow-sm bg-paper">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg uppercase md:text-xl">{f.q}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center brutal-border bg-acid font-display text-xl">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t-[3px] border-ink bg-paper px-6 py-5">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}