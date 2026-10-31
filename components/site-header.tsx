"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/weather", label: "Weather" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap wrap">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="SkyCast home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span>
            skycast<span className="brand-period">.</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav
          id="primary-navigation"
          className={open ? "nav-links nav-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={isActive ? "nav-link active" : "nav-link"}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          <Link className="nav-cta" href="/weather" onClick={closeMenu}>
            Check weather <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
