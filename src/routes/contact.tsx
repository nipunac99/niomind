import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Niomind" },
      { name: "description", content: "Start a project with Niomind. Tell us about your brand and we'll reply within 24 hours." },
      { property: "og:title", content: "Contact — Niomind" },
      { property: "og:description", content: "Start a project with Niomind." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero kicker="Contact" title="Let's start something loud." subtitle="Tell us about your brand, your goals, and your deadline. We reply within 24 hours." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <h2 className="text-3xl md:text-4xl">Studio</h2>
          <ul className="mt-6 space-y-4">
            <li className="brutal-border bg-acid p-4">
              <div className="font-mono text-xs uppercase">Email</div>
              <div className="font-display text-lg">hello@niomind.studio</div>
            </li>
            <li className="brutal-border bg-paper p-4">
              <div className="font-mono text-xs uppercase">Phone</div>
              <div className="font-display text-lg">+1 (555) 010-2048</div>
            </li>
            <li className="brutal-border bg-paper p-4">
              <div className="font-mono text-xs uppercase">Hours</div>
              <div className="font-display text-lg">Mon–Fri · 9:00–18:00</div>
            </li>
          </ul>
        </div>

        <form
          className="md:col-span-7 brutal-border brutal-shadow bg-paper p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="grid min-h-[400px] place-items-center text-center">
              <div>
                <div className="mx-auto grid h-20 w-20 place-items-center brutal-border bg-acid font-display text-4xl">✓</div>
                <h3 className="mt-6 text-3xl">Message sent.</h3>
                <p className="mt-2">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label="Name">
                <input required className="w-full brutal-border bg-paper px-4 py-3" />
              </Field>
              <Field label="Email">
                <input required type="email" className="w-full brutal-border bg-paper px-4 py-3" />
              </Field>
              <Field label="Service needed">
                <select className="w-full brutal-border bg-paper px-4 py-3">
                  <option>Logo Design</option>
                  <option>Mobile App Design</option>
                  <option>Website Design</option>
                  <option>Graphic Design</option>
                  <option>Brand Identity</option>
                </select>
              </Field>
              <Field label="Tell us about the project">
                <textarea required rows={5} className="w-full brutal-border bg-paper px-4 py-3" />
              </Field>
              <button className="brutal-border brutal-shadow brutal-hover bg-ink px-8 py-4 font-display uppercase text-paper">
                Send message →
              </button>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase">{label}</span>
      {children}
    </label>
  );
}
