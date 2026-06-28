import type { SolutionVisualType } from "@/data/site";

const industrialNodes = ["Fleet", "Signal", "Work"];
const knowledgeNodes = ["Source", "Policy", "Answer"];
const workflowNodes = ["Intent", "Gate", "Action"];

export function SolutionFlow({ type }: { type: SolutionVisualType }) {
  const labels = type === "industrial" ? industrialNodes : type === "knowledge" ? knowledgeNodes : workflowNodes;

  return (
    <div className={`solution-flow solution-flow-${type}`} aria-hidden="true">
      <div className="solution-flow-grid" />
      <div className="solution-flow-line solution-flow-line-a" />
      <div className="solution-flow-line solution-flow-line-b" />
      {labels.map((label, index) => (
        <span className={`solution-flow-node solution-flow-node-${index + 1}`} key={label}>
          {label}
        </span>
      ))}
      {type === "industrial" && (
        <div className="solution-flow-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      {type === "knowledge" && (
        <div className="solution-flow-citations">
          <span />
          <span />
          <span />
        </div>
      )}
      {type === "workflow" && (
        <div className="solution-flow-gates">
          <span />
          <span />
        </div>
      )}
    </div>
  );
}
