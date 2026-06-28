import { readinessMarkers } from "@/data/site";

export function ReadinessPanel() {
  return (
    <div className="readiness-panel" aria-label="Illustrative connected system state">
      <div className="readiness-panel-grid" aria-hidden="true" />
      <div className="readiness-core" aria-hidden="true">
        <span />
      </div>
      <div className="readiness-state">
        <p>Ready state</p>
        <ul>
          {readinessMarkers.map((marker) => (
            <li key={marker.label}>
              <span aria-hidden="true" />
              <div>
                <strong>{marker.label}</strong>
                <small>{marker.state}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
