import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { packages } from "@/content/site-content";
import { ButtonLink, CTA, Container, PageHero } from "@/components/ui";
export const metadata: Metadata = {
  title: "Industrial Monitoring Solutions",
  description:
    "Pilot-ready packages for machine monitoring, production, energy, condition alerts, multi-plant dashboards, and OEM portals.",
};
export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Defined outcomes, adaptable scope"
        title="Solution packages"
        text="Start from an operational problem and shape the integration around your equipment, data, and users—not a fixed software licence."
      />
      <section className="section">
        <Container>
          <div className="solution-grid">
            {packages.map((p, i) => (
              <article key={p.title}>
                <span className="package-num">PACKAGE 0{i + 1}</span>
                <h2>{p.title}</h2>
                <dl>
                  <div>
                    <dt>Who it is for</dt>
                    <dd>{p.for}</dd>
                  </div>
                  <div>
                    <dt>Common data points</dt>
                    <dd>{p.data}</dd>
                  </div>
                  <div>
                    <dt>Dashboard outputs</dt>
                    <dd>{p.outputs}</dd>
                  </div>
                  <div>
                    <dt>Implementation stages</dt>
                    <dd>{p.stages}</dd>
                  </div>
                  <div>
                    <dt>Optional extensions</dt>
                    <dd>{p.extensions}</dd>
                  </div>
                </dl>
                <ButtonLink href="/contact" variant="text">
                  Request assessment <ArrowRight />
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA
        title="Get a pilot estimate—not a mystery price."
        text="Every plant has different signals, access constraints, and rollout expectations. A short assessment gives you a defensible scope."
      />
    </>
  );
}
