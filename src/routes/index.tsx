import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niomind — Bold Creative Solutions" },
      {
        name: "description",
        content:
          "Digital agency offering logo, mobile app, website, and graphic design. Bold creative solutions that work.",
      },
      { property: "og:title", content: "Niomind — Bold Creative Solutions" },
      {
        property: "og:description",
        content:
          "Digital agency offering logo, mobile app, website, and graphic design.",
      },
    ],
  }),
  component: Index,
});

const customers = [
  "NORTHWIND",
  "PIXELFORGE",
  "ATLAS&CO",
  "MERIDIAN",
  "VOLT LABS",
  "FOXTROT",
  "KIN+KIND",
  "GRANITE",
  "HELIO",
  "ORBITAL",
  "MAVEN",
  "RUNE",
];

const services = [
  { title: "Logo Design", desc: "Marks people remember.", color: "bg-acid" },
  {
    title: "Mobile App Design",
    desc: "Apps that feel inevitable.",
    color: "bg-electric",
  },
  { title: "Website Design", desc: "Sites that convert.", color: "bg-hot" },
  { title: "Graphic Design", desc: "Visuals that punch.", color: "bg-sun" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b-[3px] border-ink bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-8">
            <div className="mb-6 inline-block brutal-border bg-acid px-3 py-1 font-mono text-xs uppercase">
              Digital agency · Est. now
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl">
              Bold{" "}
              <span className="inline-block bg-ink px-3 text-paper">
                design
              </span>
              <br />
              loud{" "}
              <span className="inline-block bg-hot px-3 text-white">
                results
              </span>
              .
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl">
              Niomind builds logos, websites, mobile apps and graphics for
              brands that refuse to be ignored.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="brutal-border brutal-shadow brutal-hover bg-ink px-6 py-4 font-display uppercase text-paper"
              >
                Start a project →
              </Link>
              <Link
                to="/portfolio"
                className="brutal-border brutal-shadow-sm brutal-hover bg-paper px-6 py-4 font-display uppercase"
              >
                See our work
              </Link>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="brutal-border brutal-shadow-lg grid aspect-square place-items-center bg-acid p-6">
              <div className="text-center">
                <div className="font-display text-7xl md:text-8xl">240+</div>
                <div className="mt-2 font-mono text-xs uppercase">
                  Projects shipped
                </div>
                <div className="mt-6 border-t-[3px] border-ink pt-4 font-display text-3xl">
                  98%
                </div>
                <div className="mt-1 font-mono text-xs uppercase">
                  Client retention
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMERS SLIDER */}
      <section className="border-b-[3px] border-ink bg-ink py-10 text-paper">
        <div className="mx-auto mb-6 max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl text-paper">
              Our Valuable Customers
            </h2>
            <span className="hidden font-mono text-xs uppercase text-acid md:block">
              trusted by the bold
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {[...customers, ...customers].map((name, i) => (
              <div
                key={i}
                className="grid h-20 min-w-[200px] place-items-center border-[3px] border-paper bg-ink px-8"
              >
                <span className="font-display text-xl tracking-widest text-paper">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl md:text-6xl">What we do.</h2>
            <Link
              to="/services"
              className="font-display uppercase underline decoration-4 underline-offset-4"
            >
              All services →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={i}
                className={`brutal-border brutal-shadow brutal-hover ${s.color} p-6`}
              >
                <div className="font-mono text-xs">0{i + 1}</div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-acid">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="text-4xl md:text-6xl">
            Have an idea? <br />
            Let's make noise.
          </h2>
          <Link
            to="/contact"
            className="brutal-border brutal-shadow brutal-hover bg-ink px-8 py-5 font-display text-lg uppercase text-paper"
          >
            Get a quote →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
