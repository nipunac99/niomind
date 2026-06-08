import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Niomind" },
      {
        name: "description",
        content:
          "Logo design, mobile app design, website design and graphic design services from Niomind.",
      },
      { property: "og:title", content: "Services — Niomind" },
      {
        property: "og:description",
        content: "Bold, brutalist creative services for ambitious brands.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Logo Design",
    color: "bg-acid",
    desc: "Distinctive marks built for recall. From wordmarks to monograms, we shape identities people remember after one glance.",
    items: [
      "Logo concepts",
      "Mark exploration",
      "Color systems",
      "Usage guidelines",
    ],
  },
  {
    title: "Mobile App Design",
    color: "bg-electric",
    desc: "iOS and Android interfaces that feel inevitable. Research, flows, prototypes and pixel-tight UI.",
    items: ["UX research", "Wireframes", "High-fidelity UI", "Design system"],
  },
  {
    title: "Website Design",
    color: "bg-hot",
    desc: "Marketing sites, landing pages and product UI. Fast, accessible, and built to convert.",
    items: ["Landing pages", "Marketing sites", "E-commerce", "Web apps"],
  },
  {
    title: "Graphic Design",
    color: "bg-sun",
    desc: "Print, social, packaging, decks. Visual systems that show up loud across every surface.",
    items: ["Brand collateral", "Social templates", "Packaging", "Pitch decks"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Services"
        title="What we make."
        subtitle="Four disciplines. One studio. Bold creative solutions for new businesses and established brands alike."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={i}
              className={`brutal-border brutal-shadow ${s.color} p-8`}
            >
              <div className="flex items-start justify-between">
                <div className="font-mono text-xs">SERVICE / 0{i + 1}</div>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 max-w-md">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="brutal-border bg-paper px-3 py-2 text-sm font-medium"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 brutal-border brutal-shadow bg-ink p-10 text-paper">
          <h3 className="text-3xl md:text-5xl">
            Pick a service. We'll handle the rest.
          </h3>
          <Link
            to="/contact"
            className="mt-8 inline-block brutal-border brutal-shadow brutal-hover bg-acid px-6 py-4 font-display uppercase text-ink"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
