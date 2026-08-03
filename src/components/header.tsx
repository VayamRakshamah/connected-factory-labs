"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const links = [
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["How it works", "/how-it-works"],
  ["Demo", "/demo"],
  ["About", "/about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          href="/"
          className="brand"
          aria-label={`${siteConfig.companyName} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{siteConfig.companyName}</span>
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
          Discuss your machine
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
