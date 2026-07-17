"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primarySocial = site.social[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/95 text-ink backdrop-blur-sm"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-brand text-2xl leading-none">
          {site.brandName}
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
          {primarySocial && (
            <a
              href={primarySocial.href}
              target="_blank"
              rel="noreferrer"
              className="hidden text-xs font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 sm:inline"
            >
              {primarySocial.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
