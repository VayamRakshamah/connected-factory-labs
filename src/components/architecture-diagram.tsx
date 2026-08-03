import {
  ArrowRight,
  BarChart3,
  Cloud,
  Cpu,
  Database,
  Factory,
  RadioTower,
} from "lucide-react";

const nodes = [
  [Factory, "Machine / sensor"],
  [Cpu, "PLC / controller"],
  [RadioTower, "Modbus · OPC UA"],
  [RadioTower, "Edge gateway"],
  [Cloud, "MQTT over TLS"],
  [Cloud, "Cloud platform"],
  [Database, "Secure data"],
  [BarChart3, "Dashboards & alerts"],
] as const;
export function ArchitectureDiagram() {
  return (
    <div
      className="architecture"
      role="img"
      aria-label="Machine data moves through the controller, protocol, edge gateway, secure cloud, storage, and into dashboards"
    >
      <div className="arch-flow">
        {nodes.map(([Icon, label], i) => (
          <div className="arch-item" key={label}>
            <div className="arch-node">
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight className="arch-arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <div className="arch-rail">
        <span>OT network</span>
        <i />
        <span>Encrypted transport</span>
        <i />
        <span>Application layer</span>
      </div>
    </div>
  );
}
