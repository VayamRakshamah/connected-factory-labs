import type { Metadata } from "next";
import {
  Beef,
  Boxes,
  Factory,
  PackageCheck,
  Snowflake,
  Sun,
  Waves,
  Wind,
} from "lucide-react";
import { industries } from "@/content/site-content";
import { CTA, Container, PageHero } from "@/components/ui";
export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industrial IoT applications for packaging, plastics, food, cold storage, gases, water, renewable energy, and OEMs.",
};
const more = [
  "Typical signals",
  [
    "Speed, output, cycles, temperatures, pressure, flow, levels, power, run state, faults",
  ],
  "Useful outcomes",
  [
    "Remote status, downtime context, condition alerts, energy visibility, customer service tools",
  ],
];
const industryIcons = [
  PackageCheck,
  Boxes,
  Beef,
  Snowflake,
  Wind,
  Waves,
  Sun,
  Factory,
] as const;
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Context matters"
        title="Industrial applications"
        text="The same protocol can serve very different operating goals. We begin with how the equipment runs and how people make decisions around it."
      />
      <section className="section">
        <Container>
          <div className="industry-detail-grid">
            {industries.map(([title, text], i) => (
              <article key={title}>
                <div className="industry-photo" aria-hidden="true">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {(() => {
                    const Icon = industryIcons[i];
                    return <Icon />;
                  })()}
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <div>
                  <b>{more[0]}</b>
                  <span>
                    {i === 0
                      ? "Line speed, job count, web tension, faults, idle time"
                      : i === 1
                        ? "Cycle count, barrel temperature, pressure, reject state"
                        : i === 2
                          ? "Batch state, temperature, runtime, utilities, downtime"
                          : i === 3
                            ? "Room temperature, compressor state, doors, energy, alarms"
                            : i === 4
                              ? "Purity, pressure, flow, compressor state, service hours"
                              : i === 5
                                ? "Flow, pressure, tank level, pump state, motor current"
                                : i === 6
                                  ? "Generation, inverter status, meters, availability, alarms"
                                  : "Machine health, usage, alarms, service events, counters"}
                  </span>
                </div>
                <div>
                  <b>{more[2]}</b>
                  <span>{more[3][0]}</span>
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
