import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTA, Container, PageHero } from "@/components/ui";
export const metadata: Metadata = {
  title: "Industrial IoT Services",
  description:
    "PLC integration, industrial connectivity, cloud implementation, dashboards, alerts, OEE, energy monitoring, and support.",
};
const items = [
  [
    "Industrial IoT assessment",
    "When machines produce useful signals but the route to a dependable application is unclear.",
    "Site and network review, controller inventory, protocol check, use-case framing, risk and pilot scope.",
    "Assessment brief, signal shortlist, architecture, effort range, staged roadmap.",
    "A grounded decision before hardware or cloud commitments.",
    "First deployments, legacy environments, multi-vendor lines.",
  ],
  [
    "PLC & machine-data integration",
    "Operational values remain inside controllers or local HMIs.",
    "Read-only data acquisition, tag mapping, timestamping, normalization, and context modelling.",
    "Machine state model, tag register, tested connector, data-quality report.",
    "Consistent signals that downstream systems can trust.",
    "Counters, run state, cycle data, process values, faults.",
  ],
  [
    "Modbus & OPC UA connectivity",
    "Mixed protocols make factory-wide visibility difficult.",
    "Modbus TCP/RTU polling, OPC UA subscriptions, register mapping, scaling, and connectivity diagnostics.",
    "Protocol map, gateway configuration, health monitoring, handover notes.",
    "A maintainable bridge from operational technology to applications.",
    "PLCs, meters, drives, skids, and packaged equipment.",
  ],
  [
    "Edge gateway implementation",
    "Cloud access must not compromise machine control or reliability.",
    "Gateway selection, buffering, store-and-forward, secure configuration, remote diagnostics.",
    "Hardened edge service, deployment checklist, recovery procedure.",
    "Resilient data capture during intermittent connectivity.",
    "Remote sites, legacy equipment, network-segmented plants.",
  ],
  [
    "AWS IoT implementation",
    "Telemetry needs secure identities, routing, storage, and observability.",
    "AWS IoT Core, certificates, rules, ingestion, storage, alarms, logging, and deployment infrastructure.",
    "Cloud architecture, infrastructure configuration, monitoring, runbook.",
    "A scalable, supportable data platform with explicit security boundaries.",
    "Fleet monitoring, customer portals, multi-site systems.",
  ],
  [
    "Live machine dashboards",
    "Raw tags do not answer operator or management questions.",
    "Role-appropriate views, machine states, trends, targets, filters, and responsive layouts.",
    "Live overview, detail pages, mobile view, reusable design system.",
    "Faster interpretation with less spreadsheet reconstruction.",
    "Operators, maintenance, production leads, and owners.",
  ],
  [
    "Historical analytics & reporting",
    "Teams need evidence across shifts, jobs, and time periods.",
    "Time-series storage, aggregations, filters, scheduled reports, and exports.",
    "Trend analysis, shift summaries, event timelines, CSV/PDF interfaces.",
    "Comparable, traceable history for operational reviews.",
    "Performance reviews, quality analysis, service evidence.",
  ],
  [
    "Alarm & notification systems",
    "Critical conditions are noticed late or lack escalation context.",
    "Threshold rules, persistence, acknowledgement, routing, quiet periods, and audit history.",
    "Alarm console, email/webhook integration, escalation policy, event history.",
    "Timely action without overwhelming teams with noise.",
    "Temperature excursions, pressure loss, downtime, device offline.",
  ],
  [
    "OEE & downtime monitoring",
    "Production losses are visible but not consistently classified.",
    "State modelling, ideal cycle configuration, reason capture, shift rules, and KPI calculations.",
    "Availability/performance/quality views, downtime Pareto, shift board.",
    "A shared baseline for focused improvement conversations.",
    "Repetitive manufacturing and production lines.",
  ],
  [
    "Energy monitoring",
    "Utility bills do not show operational drivers.",
    "Meter integration, machine/area allocation, demand tracking, tariffs, and anomaly rules.",
    "Consumption trends, baselines, peak-demand view, cost allocation.",
    "Evidence to investigate waste and operating patterns.",
    "Factories, cold stores, pumping, compressed air, solar.",
  ],
  [
    "Condition monitoring",
    "Maintenance signals exist but do not become useful warnings.",
    "Sensor integration, baselines, thresholds, trend logic, and maintenance context.",
    "Health view, early-warning rules, event correlation, asset history.",
    "Better prioritisation of inspections and planned work.",
    "Motors, pumps, compressors, bearings, thermal processes.",
  ],
  [
    "Custom web apps & OEM portals",
    "Standard dashboards do not fit a workflow or customer product.",
    "Product discovery, UX, APIs, roles, tenancy, branded responsive interfaces.",
    "Web application, customer portal, administration tools, documentation.",
    "A tailored operational product without rebuilding the data foundation.",
    "OEM services, service teams, customer reporting.",
  ],
  [
    "Support & maintenance",
    "Connected systems need ownership after launch.",
    "Monitoring, upgrades, incident response, data-quality checks, backlog refinement.",
    "Runbooks, service reviews, issue tracking, planned releases.",
    "Stable operation and a clear route for improvement.",
    "Pilot support, production platforms, OEM offerings.",
  ],
];
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Integration to application"
        title="Industrial IoT services"
        text="Focused services that solve the full data path—from a controller register to a useful operational decision."
      />
      <section className="section">
        <Container>
          <div className="service-detail-list">
            {items.map((x, i) => (
              <article key={x[0]}>
                <div className="service-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2>{x[0]}</h2>
                  <p className="lead">{x[1]}</p>
                  <div className="detail-grid">
                    <div>
                      <b>What we implement</b>
                      <p>{x[2]}</p>
                    </div>
                    <div>
                      <b>Typical outputs</b>
                      <p>{x[3]}</p>
                    </div>
                    <div>
                      <b>Client benefit</b>
                      <p>{x[4]}</p>
                    </div>
                    <div>
                      <b>Appropriate use cases</b>
                      <p>{x[5]}</p>
                    </div>
                  </div>
                </div>
                <CheckCircle2 />
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
