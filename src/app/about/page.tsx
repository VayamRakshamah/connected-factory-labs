import type { Metadata } from "next";
import { Braces, CloudCog, DatabaseZap, RadioTower } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CTA, Container, PageHero, SectionHeading } from "@/components/ui";
export const metadata: Metadata = {
  title: "About",
  description:
    "A technically led industrial software and integration practice spanning edge, cloud, telemetry, and dashboards.",
};
const caps = [
  [
    Braces,
    "Backend development",
    "APIs, business logic, integrations, access models, and maintainable application foundations.",
  ],
  [
    CloudCog,
    "Cloud systems",
    "Secure ingestion, infrastructure, storage, observability, deployment, and support.",
  ],
  [
    DatabaseZap,
    "Event-driven architecture",
    "Telemetry pipelines, message routing, asynchronous processing, and resilient data flows.",
  ],
  [
    RadioTower,
    "Industrial telemetry",
    "Protocol mapping, gateway integration, signal modelling, dashboards, and alert workflows.",
  ],
];
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Technically led, operationally grounded"
        title={`About ${siteConfig.companyName}`}
        text="We are an industrial software and integration practice focused on the difficult middle: getting reliable machine data into software people trust."
      />
      <section className="section">
        <Container className="split">
          <div>
            <SectionHeading
              eyebrow="Our point of view"
              title="Connectivity is only useful when the whole system makes sense."
            />
            <p className="large-copy">{siteConfig.companyStory}</p>
            <p>
              That means treating protocol details, data quality, cloud
              security, interface design, documentation, and support as one
              product problem. We communicate constraints clearly and prefer a
              working pilot to an oversized promise.
            </p>
          </div>
          <aside className="principles">
            <h2>Working principles</h2>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <b>Start with the decision</b>
                  <p>
                    Define who needs to know what, and what they will do next.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <b>Respect the machine</b>
                  <p>
                    Keep monitoring separate from control and design for plant
                    realities.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <b>Make ownership possible</b>
                  <p>
                    Document decisions, operating procedures, and extension
                    points.
                  </p>
                </div>
              </li>
            </ol>
          </aside>
        </Container>
      </section>
      <section className="section tint">
        <Container>
          <SectionHeading
            eyebrow="Core capability"
            title="Engineering across the full connected-machine stack."
          />
          <div className="card-grid four">
            {caps.map(([Icon, title, text]) => (
              <article className="card" key={String(title)}>
                <span className="icon-box">
                  <Icon />
                </span>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            ))}
          </div>
          <div className="founder-note">
            <span>Founder profile</span>
            <h2>{siteConfig.founderName}</h2>
            <p>{siteConfig.founderBio}</p>
            <small>Edit founder details centrally in src/config/site.ts.</small>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
