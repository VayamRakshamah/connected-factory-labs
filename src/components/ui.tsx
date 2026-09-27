import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
}) {
  return (
    <Link className={`button ${variant}`} href={href}>
      {children}
    </Link>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <Container className="page-hero-grid">
        <Breadcrumbs current={title} />
        <div className="page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
        <div className="page-hero-note" aria-hidden="true">
          <span>Signals</span>
          <span>Context</span>
          <span>Action</span>
        </div>
      </Container>
    </section>
  );
}

export function CTA({
  title = "Start with one machine.",
  text = "Bring us the PLC model, available signals, and the operational question. We’ll map a sensible pilot.",
}) {
  return (
    <section className="cta">
      <Container className="cta-inner">
        <div>
          <Eyebrow>Practical first step</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonLink href="/contact">
          Plan a first conversation <ArrowRight aria-hidden="true" />
        </ButtonLink>
      </Container>
    </section>
  );
}
