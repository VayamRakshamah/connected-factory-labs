"use client";
import { Activity, CheckCircle2 } from "lucide-react";
export function TelemetryVisual() {
  return (
    <div
      className="telemetry-card"
      aria-label="Simulated live machine telemetry"
    >
      <div className="telemetry-top">
        <div>
          <span className="live-dot" />
          <b>Line 04</b>
          <small>SIMULATED DATA</small>
        </div>
        <span className="status">
          <CheckCircle2 /> Running
        </span>
      </div>
      <div className="chart">
        <svg viewBox="0 0 560 170" role="img" aria-label="Pressure trend line">
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3aa7ff" stopOpacity=".32" />
              <stop offset="1" stopColor="#3aa7ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="area"
            d="M0,124 C45,90 68,108 105,80 S164,112 205,86 S260,58 300,79 S360,111 400,70 S472,92 560,38 L560,170 L0,170Z"
          />
          <path
            className="line"
            d="M0,124 C45,90 68,108 105,80 S164,112 205,86 S260,58 300,79 S360,111 400,70 S472,92 560,38"
          />
        </svg>
        <span>
          <Activity /> Pressure · last 30 min
        </span>
      </div>
      <div className="metrics">
        <div>
          <small>Output</small>
          <strong>1,284</strong>
          <span>units / shift</span>
        </div>
        <div>
          <small>Pressure</small>
          <strong>7.2</strong>
          <span>bar</span>
        </div>
        <div>
          <small>Temperature</small>
          <strong>68.4</strong>
          <span>°C</span>
        </div>
      </div>
    </div>
  );
}
