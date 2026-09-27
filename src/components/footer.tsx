import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, RadioTower } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-lead">
          <p>One machine is enough to begin.</p>
          <h2>Turn the signals you already have into a view people can use.</h2>
          <Link href="/contact" className="footer-conversation">
            Discuss a pilot <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <RadioTower />
              </span>
              <span>{siteConfig.companyName}</span>
            </Link>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/services">Services</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/demo">Live demo</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div>
            <h3>Start here</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.address}</span>
            <div className="social">
              <a href={siteConfig.linkedInUrl} aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={siteConfig.githubUrl} aria-label="GitHub">
                <Github />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}
          </span>
          <span>Clearer signals. Better conversations.</span>
        </div>
      </Container>
    </footer>
  );
}
