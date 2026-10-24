"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#about", label: "About us" },
];

export default function Navbar({ theme }: { theme?: "cosmic" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const compactMode = useRef(false);

  useEffect(() => {
    const updateHeader = () => {
      const nextCompactMode = compactMode.current
        ? window.scrollY > 24
        : window.scrollY > 80;

      if (nextCompactMode !== compactMode.current) {
        compactMode.current = nextCompactMode;
        setScrolled(nextCompactMode);
      }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${theme ? ` site-header--${theme}` : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand brand-logo" href="#home" aria-label="Stellar Technical Services home" onClick={() => setOpen(false)}>
          <Image src="/stellar-logo.png" alt="Stellar Technical Services LLC" width={799} height={252} priority />
        </Link>
        <div className={`nav-links${open ? " is-open" : ""}`}>
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="nav-cta" href="/enquire" onClick={() => setOpen(false)}>Let&apos;s talk <span>↗</span></Link>
        </div>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
