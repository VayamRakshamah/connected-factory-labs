import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  Check,
  CircleGauge,
  Clock3,
  Gauge,
  RadioTower,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import {
  ButtonLink,
  Container,
  CTA,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { faqs, industries, services } from "@/content/site-content";

const moments = [
  {
    icon: Clock3,
    label: "When a line stops",
    title: "Everyone should see the same story.",
    text: "Replace scattered calls and screenshots with the machine state, alarm, and recent trend in one shared view.",
  },
  {
    icon: Wrench,
    label: "Before service arrives",
    title: "Give the technician useful context.",
    text: "Show what changed, when it changed, and what the machine was doing immediately beforehand.",
  },
  {
    icon: UsersRound,
    label: "During the daily review",
    title: "Talk about causes, not conflicting numbers.",
    text: "Bring operators, owners, and service teams back to one clear operational record.",
  },
] as const;

const pilotSteps = [
  [
    "01",
    "Choose the question",
    "Agree on the machine, the people, and the decision the first view should support.",
  ],
  [
    "02",
    "Map the signals",
    "Identify the controller, protocol, useful tags, units, states, and safe access path.",
  ],
  [
    "03",
    "Build the first view",
    "Connect a contained data path and shape dashboards and alerts around real work.",
  ],
  [
    "04",
    "Prove and extend",
    "Validate the data with users, document the system, then decide what deserves to scale.",
  ],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>
                <Sparkles aria-hidden="true" /> Practical industrial
                intelligence
              </span>
            </div>
            <h1>
              Your factory is already speaking.{" "}
              <span>Make every signal useful.</span>
            </h1>
            <p>
              We connect existing machines to calm, clear operational views—so
              your team can understand production, downtime, energy, and alarms
              without replacing the equipment that already works.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">
                Plan a one-machine pilot <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/demo" variant="secondary">
                View Live Demo
              </ButtonLink>
            </div>
            <div className="hero-proof" aria-label="Pilot principles">
              <span>
                <Check aria-hidden="true" /> Read-only first
              </span>
              <span>
                <Check aria-hidden="true" /> Works with existing PLCs
              </span>
              <span>
                <Check aria-hidden="true" /> Clear handover
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/factory-collaboration.webp"
              alt="Two industrial professionals reviewing machine information together on a tablet"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <div className="hero-signal-card">
              <div className="signal-card-top">
                <span>
                  <i aria-hidden="true" /> Line 04 · Running
                </span>
                <small>SIMULATED VIEW</small>
              </div>
              <strong>Today, at a glance</strong>
              <div className="signal-card-metrics">
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
            <div className="hero-caption">
              <ShieldCheck aria-hidden="true" />
              <span>
                <b>Machine control stays at the machine.</b>
                Monitoring remains a separate, considered layer.
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="audience-bar" aria-label="Who we help">
        <Container>
          <span>Built for the people responsible for uptime</span>
          <div>Manufacturers</div>
          <div>Machine OEMs</div>
          <div>Plant owners</div>
          <div>Service teams</div>
        </Container>
      </section>

      <section className="section story-section">
        <Container>
          <SectionHeading
            eyebrow="The work behind the dashboard"
            title="Clarity matters most when something changes."
            text="A useful connected-machine system does more than collect values. It helps people reach the same understanding sooner."
          />
          <div className="moment-grid">
            {moments.map(({ icon: Icon, label, title, text }, index) => (
              <article className="moment-card" key={title}>
                <div className="moment-number">0{index + 1}</div>
                <span className="moment-icon">
                  <Icon aria-hidden="true" />
                </span>
                <p>{label}</p>
                <h3>{title}</h3>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section shared-view-section">
        <Container className="shared-view-grid">
          <div className="shared-view-copy">
            <Eyebrow>One view, better conversations</Eyebrow>
            <h2>See the situation before the phone starts ringing.</h2>
            <p>
              The right screen is not crowded with every available tag. It
              brings forward the state, context, and trend that help somebody
              decide what to do next.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" /> Live state that reads at a glance
              </li>
              <li>
                <Check aria-hidden="true" /> Trends that explain what changed
              </li>
              <li>
                <Check aria-hidden="true" /> Alerts with enough context to act
              </li>
              <li>
                <Check aria-hidden="true" /> Views shaped for each role
              </li>
            </ul>
            <ButtonLink href="/demo" variant="text">
              Explore the simulated demo <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>

          <div
            className="decision-board"
            aria-label="Simulated machine overview"
          >
            <div className="decision-board-head">
              <div>
                <span className="live-dot" />
                <div>
                  <small>PACKING LINE 04</small>
                  <b>Running normally</b>
                </div>
              </div>
              <span>Updated now</span>
            </div>
            <div className="decision-primary">
              <div>
                <small>Shift progress</small>
                <strong>1,284</strong>
                <span>of 1,600 units</span>
              </div>
              <div
                className="decision-progress"
                aria-label="80 percent of shift target"
              >
                <span style={{ width: "80%" }} />
              </div>
            </div>
            <div className="decision-metrics">
              <article>
                <Gauge aria-hidden="true" />
                <small>Pressure</small>
                <strong>7.2 bar</strong>
                <span>Within range</span>
              </article>
              <article>
                <CircleGauge aria-hidden="true" />
                <small>Cycle time</small>
                <strong>4.8 sec</strong>
                <span>Stable</span>
              </article>
              <article>
                <BellRing aria-hidden="true" />
                <small>Attention</small>
                <strong>1 advisory</strong>
                <span>Review soon</span>
              </article>
            </div>
            <div className="decision-event">
              <span>10:42</span>
              <div>
                <b>Pressure recovered after a brief dip</b>
                <p>No stop recorded. Advisory remains visible for review.</p>
              </div>
            </div>
            <p className="simulation-label">
              Illustrative interface · all values are simulated
            </p>
          </div>
        </Container>
      </section>

      <section className="section service-story">
        <Container>
          <SectionHeading
            eyebrow="What we bring together"
            title="One accountable path from machine to moment of decision."
            text="Connectivity, cloud engineering, and interface design are treated as one system—not three disconnected projects."
          />
          <div className="service-story-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <span className="service-story-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/services" variant="text">
            See the full service capability <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </section>

      <section className="section pilot-journey">
        <Container>
          <div className="pilot-intro">
            <div>
              <Eyebrow>A contained first step</Eyebrow>
              <h2>Start narrow. Learn fast. Scale with intent.</h2>
            </div>
            <p>
              A focused pilot turns assumptions into evidence without forcing a
              factory-wide commitment. One useful question, one machine, one
              working data path.
            </p>
          </div>
          <ol className="pilot-steps">
            {pilotSteps.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="pilot-link">
            <ButtonLink href="/how-it-works">
              See how a pilot works <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section industry-section">
        <Container className="industry-story-grid">
          <div className="industry-image">
            <Image
              src="/industrial-operator.png"
              alt="An operations engineer reviewing a production line with a tablet"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div>
              <RadioTower aria-hidden="true" />
              <span>
                Built around existing equipment and real operating constraints.
              </span>
            </div>
          </div>
          <div>
            <Eyebrow>Where the approach fits</Eyebrow>
            <h2>Different machines. The same need for dependable context.</h2>
            <p>
              We adapt the signal model and interface to the equipment, process,
              and people already in place.
            </p>
            <div className="industry-list">
              {industries.map(([title], index) => (
                <span key={title}>
                  <b>{String(index + 1).padStart(2, "0")}</b> {title}
                </span>
              ))}
            </div>
            <ButtonLink href="/industries" variant="text">
              Explore industry applications <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section demo-spotlight">
        <Container className="demo-spotlight-grid">
          <div>
            <Eyebrow>Try the idea before the conversation</Eyebrow>
            <h2>A working preview, with the pretending clearly labelled.</h2>
            <p>
              Explore a simulated oxygen generator with live-changing readings,
              production context, a telemetry trend, and an alarm workflow.
            </p>
            <ButtonLink href="/demo">
              Open the simulated machine <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="demo-preview-card">
            <div>
              <span className="live-dot" /> MACHINE OX-01
              <small>SIMULATED</small>
            </div>
            <strong>
              99.2 <span>% purity</span>
            </strong>
            <div className="demo-preview-detail">
              <span>
                <b>7.2 bar</b> Pressure
              </span>
              <span>
                <b>42.8 Nm³/h</b> Flow
              </span>
              <span>
                <b>1</b> Advisory
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section faq-section">
        <Container className="faq-wrap">
          <SectionHeading
            eyebrow="Questions before a pilot"
            title="Straight answers for practical decisions."
            text="A first conversation should reduce uncertainty, not create pressure."
          />
          <FAQ items={faqs} />
        </Container>
      </section>

      <CTA
        title="Bring one machine into view."
        text="Tell us what your team cannot see today. We’ll help frame a contained, useful first step."
      />
    </>
  );
}
