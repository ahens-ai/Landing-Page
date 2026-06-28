import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return <section className="not-found"><Container><p className="eyebrow">404 / Signal lost</p><h1>This path is not part of the system.</h1><p>The page you are looking for has moved, changed shape, or never existed.</p><Link href="/" className="button button-primary">Return home <span>↗</span></Link></Container></section>;
}
