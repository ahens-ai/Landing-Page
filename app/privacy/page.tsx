import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export default function PrivacyPage() {
  return <><PageHero eyebrow="Legal" title="Privacy, in plain language." copy="Placeholder privacy notice. Replace this copy with a reviewed policy before collecting personal data in production."/><section className="legal-page"><Container><article><h2>Placeholder privacy notice</h2><p>This demo site does not persist contact or newsletter form submissions. In production, explain what data is collected, why, where it is stored, retention periods, user rights, processors, cookies, security, and contact details.</p><h3>What to add before launch</h3><ul><li>A complete controller identity and legal address.</li><li>Details of analytics, CRM, and email providers.</li><li>Cookie consent and preference management where required.</li><li>A lawful basis and rights process for every market you serve.</li></ul></article></Container></section></>;
}
