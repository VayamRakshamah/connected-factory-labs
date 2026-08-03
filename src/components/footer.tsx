import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <i />
                <i />
                <i />
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
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              {siteConfig.phone}
            </a>
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
          <span>Industrial clarity, from edge to action.</span>
        </div>
      </Container>
    </footer>
  );
}
