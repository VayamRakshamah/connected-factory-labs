"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, RadioTower, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const links = [
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["How it works", "/how-it-works"],
  ["Demo", "/demo"],
  ["About", "/about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          href="/"
          className="brand"
          aria-label={`${siteConfig.companyName} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            <RadioTower />
          </span>
          <span className="brand-name">{siteConfig.companyName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className={path === href ? "active" : ""}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Discuss your machine <ArrowUpRight aria-hidden="true" />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-links">
              {links.map(([label, href], index) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-cta">
              <p>Ready to make one machine easier to understand?</p>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
