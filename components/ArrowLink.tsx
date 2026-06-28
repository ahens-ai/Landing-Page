import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link className={`arrow-link ${className}`.trim()} href={href}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}
