"use client";
import {
  Activity,
  AlertTriangle,
  CircleGauge,
  Droplets,
  ExternalLink,
  Factory,
  Gauge,
  Thermometer,
  Wind,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/config/site";
const metrics = [
  [Droplets, "Purity", "99.2", "%"],
  [Gauge, "Pressure", "7.2", "bar"],
  [Thermometer, "Temperature", "68.4", "°C"],
  [Wind, "Flow", "42.8", "Nm³/h"],
  [CircleGauge, "Cycle count", "18,492", "cycles"],
  [Factory, "Production", "1,284", "units"],
] as const;
export default function Demo() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <PageHero
        eyebrow="Interactive preview · simulated data"
        title="Connected machine demo"
        text="A demonstration of how one industrial machine can present live status, process values, production context, trends, and alarms."
      />
      <section className="demo-shell">
        <Container>
          <div className="demo-notice">
            <Activity /> All readings on this page are locally generated sample
            data. They do not represent a real plant.
          </div>
          <div className="machine-header">
            <div>
              <span className="live-dot" />
              <div>
                <small>MACHINE OX-01</small>
                <h2>Oxygen Generator</h2>
              </div>
            </div>
            <span className="online">ONLINE</span>
          </div>
          <div className="demo-metrics">
            {metrics.map(([Icon, label, value, unit], i) => (
              <article key={label}>
                <Icon />
                <small>{label}</small>
                <strong>
                  {i < 4
                    ? `${(Number(value) + ((tick % 3) - 1) * (i + 1) * 0.1).toFixed(1)}`
                    : value}
                </strong>
                <span>{unit}</span>
              </article>
            ))}
          </div>
          <div className="demo-lower">
            <article className="trend-card">
              <div>
                <h3>Telemetry trend</h3>
                <span>Last 60 minutes</span>
              </div>
              <svg
                viewBox="0 0 800 250"
                role="img"
                aria-label="Simulated pressure and flow trend"
              >
                <path
                  className="gridline"
                  d="M0 50H800M0 100H800M0 150H800M0 200H800"
                />
                <path
                  className="trend-a"
                  d="M0 175 C70 110 100 145 155 120 S245 160 310 95 S410 135 475 105 S580 145 650 80 S735 110 800 60"
                />
                <path
                  className="trend-b"
                  d="M0 195 C80 170 135 205 195 155 S300 185 355 145 S470 175 540 130 S650 165 705 120 S760 140 800 105"
                />
              </svg>
              <div className="legend">
                <span>
                  <i className="blue" />
                  Pressure
                </span>
                <span>
                  <i className="cyan" />
                  Flow
                </span>
              </div>
            </article>
            <article className="alarm-card">
              <div>
                <AlertTriangle />
                <span>ACTIVE ALARM</span>
              </div>
              <h3>Outlet pressure approaching low threshold</h3>
              <p>Pressure has remained below 7.4 bar for 3 minutes.</p>
              <dl>
                <div>
                  <dt>Started</dt>
                  <dd>10:42:18</dd>
                </div>
                <div>
                  <dt>Priority</dt>
                  <dd>Advisory</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Unacknowledged</dd>
                </div>
              </dl>
              <button>Acknowledge sample alarm</button>
            </article>
          </div>
          <div className="demo-architecture">
            <h2>How the sample flow is modelled</h2>
            <p>
              Simulated machine readings → gateway process → MQTT message →
              cloud ingestion → time-series storage → dashboard and alert rules.
            </p>
            <div>
              <a href={siteConfig.githubUrl}>
                View GitHub project <ExternalLink />
              </a>
              <a href={siteConfig.demoUrl}>
                Open deployed demo <ExternalLink />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
