import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { processSteps } from "@/content/site-content";
import { CTA, Container, PageHero, SectionHeading } from "@/components/ui";
export const metadata: Metadata = {
  title: "How Industrial IoT Integration Works",
  description:
    "See the device-to-dashboard architecture and eight-stage industrial IoT engagement process.",
};
export default function How() {
  return (
    <>
      <PageHero
        eyebrow="From signal to operational context"
        title="How it works"
        text="A clear technical path, sensible security boundaries, and staged delivery keep the pilot understandable and the production system maintainable."
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Reference architecture"
            title="Each layer has a defined responsibility."
            text="Machine control remains at the machine. Monitoring data moves through a hardened edge and encrypted transport into an application layer."
          />
          <ArchitectureDiagram />
          <div className="architecture-notes">
            <article>
              <h3>Operational technology</h3>
              <p>
                The PLC or controller continues running the machine. We identify
                read-only signals and connect through the appropriate industrial
                interface.
              </p>
            </article>
            <article>
              <h3>Edge and transport</h3>
              <p>
                The gateway normalises data, handles temporary disconnection,
                and publishes through MQTT over TLS with a unique device
                identity.
              </p>
            </article>
            <article>
              <h3>Cloud and applications</h3>
              <p>
                Secure ingestion, storage, and APIs provide the foundation for
                dashboards, alerts, reports, and customer-facing products.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <section className="section tint">
        <Container>
          <SectionHeading
            eyebrow="Engagement stages"
            title="Move from uncertainty to a working pilot."
          />
          <div className="timeline">
            {processSteps.map((step, i) => (
              <article key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step}</h3>
                  <p>
                    {
                      [
                        "Define the operational question, users, constraints, and success criteria.",
                        "Inspect controllers, networks, interfaces, and access conditions.",
                        "Agree names, units, ranges, states, sampling, and context.",
                        "Connect a contained scope and prove data quality end to end.",
                        "Shape views, filters, trends, events, and notifications around users.",
                        "Verify values, failure modes, security, performance, and usability.",
                        "Document and release the system into its intended environment.",
                        "Enable users, hand over runbooks, and plan operational ownership.",
                      ][i]
                    }
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
