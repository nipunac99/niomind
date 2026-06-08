import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Niomind" },
      {
        name: "description",
        content:
          "Reasons to choose Niomind: clear process, bold design, on-time delivery, and creative solutions that perform.",
      },
      { property: "og:title", content: "Why Choose Us — Niomind" },
      {
        property: "og:description",
        content:
          "Bold ideas, sharp execution, and a process that respects your time.",
      },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  {
    t: "Creative-first",
    d: "Every brief starts with an idea worth defending — not a template.",
    c: "bg-acid",
  },
  {
    t: "Senior-only team",
    d: "You work directly with the people doing the work. No handoff games.",
    c: "bg-hot",
  },
  {
    t: "Tight feedback loops",
    d: "Weekly demos, async updates, no surprises at the finish line.",
    c: "bg-electric",
  },
  {
    t: "Systems, not stickers",
    d: "We design scalable visual systems that survive launch day.",
    c: "bg-sun",
  },
  {
    t: "On time. Every time.",
    d: "Predictable sprints with clear deliverables and dates.",
    c: "bg-paper",
  },
  {
    t: "Built to convert",
    d: "Beauty is the floor. Performance is the goal.",
    c: "bg-acid",
  },
];

function WhyPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Why us"
        title="Six reasons. Zero filler."
        subtitle="We're picky about the work we take on, and ruthless about how we ship it."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`brutal-border brutal-shadow brutal-hover ${r.c} p-6`}
            >
              <div className="font-mono text-xs">0{i + 1}</div>
              <h3 className="mt-6 text-2xl">{r.t}</h3>
              <p className="mt-3">{r.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 brutal-border brutal-shadow bg-electric p-10">
          <h3 className="text-3xl md:text-4xl">
            Still comparing? Talk to us for 20 minutes.
          </h3>
          <p className="mt-3 max-w-2xl">
            A free intro call, no pitch deck. We'll diagnose the problem and
            tell you if we're the right team — even if the answer is no.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block brutal-border brutal-shadow-sm brutal-hover bg-ink px-6 py-4 font-display uppercase text-paper"
          >
            Book intro call →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
