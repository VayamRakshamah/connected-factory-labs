import {
  ArrowRight,
  Check,
  CircleGauge,
  Clock3,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { FAQ } from "@/components/faq";
import {
  ButtonLink,
  Container,
  CTA,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { faqs, industries, problems, services } from "@/content/site-content";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>
                <Sparkles /> Practical industrial intelligence
              </span>
              <span>Built around your machines</span>
            </div>
            <h1>
              Know what your machines are doing—<span>wherever you are.</span>
            </h1>
            <p>
              Give operators, owners, and service teams one clear view of
              production, downtime, energy, and alarms—without replacing the
              equipment that already works.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.demoUrl}>
                View Live Demo <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Discuss Your Machine
              </ButtonLink>
            </div>
            <div className="hero-proof">
              <span>
                <Check /> Start with one machine
              </span>
              <span>
                <Check /> Works with existing PLCs
              </span>
              <span>
                <Check /> Clear handover and support
              </span>
            </div>
          </div>
          <div
            className="hero-scene"
            role="img"
            aria-label="An operations engineer reviewing machine information on a tablet beside a production line"
          >
            <div className="hero-scene-card">
              <div>
                <span className="live-dot" /> Line 04 is running
              </div>
              <strong>All key signals in one place</strong>
              <div className="scene-stats">
                <span>
                  <b>1,284</b>
                  <small>shift output</small>
                </span>
                <span>
                  <b>7.2 bar</b>
                  <small>pressure</small>
                </span>
                <span>
                  <b>0</b>
                  <small>critical alarms</small>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="trust-ribbon" aria-label="Who we help">
        <Container>
          <span>Built for practical industrial teams</span>
          <div>Manufacturers</div>
          <div>Machine OEMs</div>
          <div>Plant owners</div>
          <div>Service teams</div>
        </Container>
      </section>
      <section className="section outcome-section">
        <Container>
          <SectionHeading
            eyebrow="A calmer way to run operations"
            title="Less chasing. More knowing."
            text="The value is not another dashboard. It is giving every person the context they need to act sooner and communicate better."
            align="center"
          />
          <div className="outcome-grid">
            <article>
              <span>
                <Eye />
              </span>
              <h3>See the whole picture</h3>
              <p>
                Live machine state, production, trends, and alarms in one
                view—at the plant or away from it.
              </p>
            </article>
            <article>
              <span>
                <Clock3 />
              </span>
              <h3>Respond with context</h3>
              <p>
                Understand what changed before the phone call, so maintenance
                and service teams arrive better prepared.
              </p>
            </article>
            <article>
              <span>
                <HeartHandshake />
              </span>
              <h3>Build trust with clarity</h3>
              <p>
                Give operators, managers, and customers a shared source of truth
                without forcing a one-size-fits-all platform.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="What gets in the way"
            title="Good machines should not leave people guessing."
            text="We turn isolated controller values into useful shared context, shaped around how your operation actually works."
          />
          <div className="card-grid four">
            {problems.map(({ icon: Icon, title, text }) => (
              <article className="card problem" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section section-dark">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="A reliable path from signal to screen."
            text="Connectivity, cloud engineering, and product design delivered as one coherent system."
          />
          <div className="card-grid four">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="card service" key={title}>
                <span className="icon-box">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/services" variant="text">
            Explore every service <ArrowRight />
          </ButtonLink>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Device to dashboard"
            title="A transparent industrial data architecture."
            text="Each layer has a clear job: acquire safely, transport securely, store usefully, and present the right context."
          />
          <ArchitectureDiagram />
          <div className="feature-strip">
            <div>
              <ShieldCheck />
              <b>Secure by design</b>
              <span>
                Encrypted transport, scoped access, and separation from control.
              </span>
            </div>
            <div>
              <Workflow />
              <b>Integration-ready</b>
              <span>
                Practical interfaces for existing systems and future
                applications.
              </span>
            </div>
            <div>
              <CircleGauge />
              <b>Built for operators</b>
              <span>
                Clear states, trends, alarms, and reports—not dashboard theatre.
              </span>
            </div>
          </div>
        </Container>
      </section>
      <section className="section tint">
        <Container>
          <SectionHeading
            eyebrow="Where it fits"
            title="Built around real industrial operating contexts."
          />
          <div className="industry-grid">
            {industries.map(([title, text]) => (
              <article key={title}>
                <span>0{industries.findIndex((i) => i[0] === title) + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/industries" variant="text">
            View industry applications <ArrowRight />
          </ButtonLink>
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <div>
            <SectionHeading
              eyebrow="Why work with us"
              title="Technical depth, explained plainly."
              text="The strongest industrial systems are designed around constraints: old controllers, mixed protocols, limited networks, operator habits, and maintainability."
            />
            <ul className="check-list">
              <li>
                <Check /> One accountable path across edge, cloud, and interface
              </li>
              <li>
                <Check /> Small pilot before broader rollout
              </li>
              <li>
                <Check /> Documentation and handover built into delivery
              </li>
              <li>
                <Check /> No unsupported claims or forced platform lock-in
              </li>
            </ul>
          </div>
          <div className="pilot-card">
            <Eyebrow>Pilot engagement</Eyebrow>
            <h3>Prove the data path on one machine.</h3>
            <p>
              We assess connectivity, agree a focused signal list, configure the
              pipeline, and deliver a working dashboard view for review.
            </p>
            <ol>
              <li>
                <span>01</span>Machine and protocol assessment
              </li>
              <li>
                <span>02</span>Selected data-point mapping
              </li>
              <li>
                <span>03</span>Live dashboard and alert pilot
              </li>
            </ol>
            <ButtonLink href="/contact">Get a pilot estimate</ButtonLink>
          </div>
        </Container>
      </section>
      <section className="section demo-band">
        <Container className="demo-grid">
          <div>
            <Eyebrow>See the concept</Eyebrow>
            <h2>A simulated machine. A working operational view.</h2>
            <p>
              Explore purity, pressure, temperature, flow, production, alarms,
              and a telemetry trend using clearly labelled sample data.
            </p>
            <ButtonLink href="/demo">
              Open the demo preview <ArrowRight />
            </ButtonLink>
          </div>
          <div className="mini-dashboard">
            <div>
              <span className="live-dot" /> ONLINE
            </div>
            <strong>
              99.2<small>% purity</small>
            </strong>
            <div className="bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>Telemetry is simulated for demonstration.</p>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="faq-wrap">
          <SectionHeading
            eyebrow="Questions before a pilot"
            title="Straight answers for practical decisions."
          />
          <FAQ items={faqs} />
        </Container>
      </section>
      <CTA
        title="Bring one machine into view."
        text="Tell us what controller you have, what the team cannot see today, and what a useful first outcome would look like."
      />
    </>
  );
}
