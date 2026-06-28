import type { CapabilityVisualType } from "@/data/site";

export function CapabilityVisual({ type }: { type: CapabilityVisualType }) {
  return (
    <div className={`capability-visual capability-visual-${type}`} aria-hidden="true">
      {type === "connect" && (
        <>
          <span className="capability-port capability-port-a" />
          <span className="capability-port capability-port-b" />
          <span className="capability-port capability-port-c" />
          <span className="capability-bus" />
          <span className="capability-packet capability-packet-a" />
          <span className="capability-packet capability-packet-b" />
        </>
      )}
      {type === "orchestrate" && (
        <>
          <span className="capability-decision capability-decision-root" />
          <span className="capability-branch capability-branch-a" />
          <span className="capability-branch capability-branch-b" />
          <span className="capability-decision capability-decision-left" />
          <span className="capability-decision capability-decision-right" />
          <span className="capability-resolution" />
        </>
      )}
      {type === "observe" && (
        <>
          <span className="capability-trace capability-trace-a" />
          <span className="capability-trace capability-trace-b" />
          <span className="capability-trace capability-trace-c" />
          <span className="capability-window" />
          <span className="capability-lock" />
        </>
      )}
    </div>
  );
}
