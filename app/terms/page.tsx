import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export default function TermsPage() {
  return <><PageHero eyebrow="Legal" title="Terms of use." copy="Placeholder terms. Have qualified legal counsel review the final version for your company, products, geographies, and liability model."/><section className="legal-page"><Container><article><h2>Placeholder terms</h2><p>This starter does not provide contractual terms. Before launch, include accepted-use restrictions, intellectual-property terms, disclaimers, liability limitations, jurisdiction, termination, notice rules, and any product-specific conditions.</p><h3>Important implementation note</h3><p>Do not present this placeholder copy as final legal terms. Replace it before production use.</p></article></Container></section></>;
}
