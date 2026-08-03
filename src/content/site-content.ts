import {
  Activity,
  BellRing,
  Bolt,
  ChartNoAxesCombined,
  CloudCog,
  Factory,
  Gauge,
  RadioTower,
} from "lucide-react";

export const services = [
  {
    icon: RadioTower,
    title: "Machine connectivity",
    text: "Map PLC and controller data through Modbus TCP, Modbus RTU, or OPC UA without disrupting machine control.",
  },
  {
    icon: CloudCog,
    title: "Edge and cloud integration",
    text: "Deploy industrial gateways, MQTT over TLS, AWS IoT Core, ingestion pipelines, storage, and operational support.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Operations dashboards",
    text: "Give teams a clear view of production, downtime, OEE, energy, alarms, and historical performance.",
  },
  {
    icon: BellRing,
    title: "Alerts and applications",
    text: "Create threshold alerts, reports, mobile-friendly tools, and white-labelled OEM portals around real workflows.",
  },
];

export const industries = [
  [
    "Packaging & printing",
    "Track speed, counts, stops, faults, and job performance.",
  ],
  [
    "Plastics",
    "Monitor cycles, temperatures, pressure, rejects, and machine state.",
  ],
  [
    "Food processing",
    "Improve batch visibility, uptime, temperature, and utility monitoring.",
  ],
  [
    "Cold storage",
    "Watch temperatures, compressors, door events, energy, and alarms.",
  ],
  [
    "Industrial gases",
    "Surface purity, pressure, flow, runtime, and service conditions.",
  ],
  [
    "Water & pumping",
    "Track tank levels, pump state, flow, pressure, and energy.",
  ],
  [
    "Renewable energy",
    "Combine generation, meter, inverter, and asset performance data.",
  ],
  [
    "Machine OEMs",
    "Offer customers a secure, branded connected-machine portal.",
  ],
] as const;

export const packages = [
  {
    title: "Remote Machine Monitoring Starter",
    for: "A first connected-machine pilot",
    data: "Run state, key process values, faults, counters",
    outputs: "Live overview, trends, alerts, mobile view",
    stages: "Assess → map → connect → validate",
    extensions: "Reports, more machines, service portal",
  },
  {
    title: "Production & Downtime Monitoring",
    for: "Lines that need a shared production truth",
    data: "Counts, targets, reason codes, states, cycle times",
    outputs: "Shift boards, downtime Pareto, OEE inputs",
    stages: "Baseline → data map → operator flow → rollout",
    extensions: "Scheduling, quality, ERP integration",
  },
  {
    title: "Factory Energy Monitoring",
    for: "Sites controlling energy use and demand",
    data: "Meters, voltage, current, power, energy, demand",
    outputs: "Load profile, cost views, anomaly alerts",
    stages: "Meter audit → ingestion → dashboards → thresholds",
    extensions: "Tariffs, solar, plant comparison",
  },
  {
    title: "Condition Monitoring & Alerts",
    for: "Maintenance teams prioritising intervention",
    data: "Temperature, vibration, pressure, current, runtime",
    outputs: "Trends, thresholds, escalation, history",
    stages: "Failure-mode review → sensing → rules → tuning",
    extensions: "Work orders, advanced analytics",
  },
  {
    title: "Multi-Plant Management Dashboard",
    for: "Operators managing distributed assets",
    data: "Site KPIs, machine state, output, alarms, energy",
    outputs: "Portfolio view, drill-down, comparisons",
    stages: "KPI alignment → site adapters → rollout",
    extensions: "Roles, SSO, reporting APIs",
  },
  {
    title: "Connected Machine Portal for OEMs",
    for: "OEMs adding digital services",
    data: "Equipment health, service events, usage, alarms",
    outputs: "Branded customer portal, fleet view, service tools",
    stages: "Product workshop → tenant model → pilot → launch",
    extensions: "Subscriptions, parts, remote support",
  },
] as const;

export const processSteps = [
  "Discovery",
  "Machine & protocol assessment",
  "Data-point mapping",
  "Pilot implementation",
  "Dashboard configuration",
  "Testing",
  "Deployment",
  "Training & support",
];

export const faqs = [
  [
    "Will you replace our PLC program?",
    "Usually, no. The monitoring layer reads agreed data points and remains separate from the machine-control logic.",
  ],
  [
    "Can we start with one machine?",
    "Yes. A small pilot is the best way to confirm signal quality, network constraints, dashboard value, and rollout effort.",
  ],
  [
    "What if our equipment uses different protocols?",
    "We assess each controller and gateway, then design a common, secure data model above Modbus, OPC UA, or vendor-specific interfaces.",
  ],
  [
    "Does the solution have to use AWS?",
    "No. AWS IoT is one supported path. The architecture can use another appropriate cloud or an on-premise deployment when requirements demand it.",
  ],
] as const;

export const problems = [
  {
    icon: Gauge,
    title: "Status is trapped at the machine",
    text: "Operators can see what is happening locally, but owners and service teams cannot see it remotely.",
  },
  {
    icon: Activity,
    title: "Downtime lacks context",
    text: "Counts and stoppages are recorded inconsistently, making recurring losses hard to diagnose.",
  },
  {
    icon: Bolt,
    title: "Energy is a monthly surprise",
    text: "Bills show total consumption, not which machine, shift, or operating condition drove it.",
  },
  {
    icon: Factory,
    title: "OEM support stays reactive",
    text: "Service teams learn about a problem after a customer calls, with little diagnostic history.",
  },
];
