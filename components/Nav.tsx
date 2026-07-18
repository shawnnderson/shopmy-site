"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import type { ShopGroup } from "./ShopBrowser";
import { useShopSelection } from "./ShopSelection";

export default function Nav({ groups }: { groups: ShopGroup[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setActiveId } = useShopSelection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [menuOpen]);

  const primarySocial = site.social[0];
  const otherNavItems = site.nav.filter((item) => item.href !== "#shop");

  const handleSelect = (categoryId: string) => {
    setActiveId(categoryId);
    setMenuOpen(false);
    document
      .getElementById("shop")
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/95 text-ink backdrop-blur-sm"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#top" className="font-brand text-2xl leading-none">
          {site.brandName}
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          <a
            href="#shop"
            className="hidden text-xs font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 md:inline"
          >
            Shop
          </a>

          <div className="relative md:hidden" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              Shop
              <span
                className={`text-[10px] transition-transform ${menuOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-3 max-h-[70vh] w-64 overflow-y-auto border border-ink/10 bg-paper text-ink shadow-lg">
                {groups.map((group) => (
                  <div key={group.id}>
                    {group.categories.length > 1 && (
                      <div className="px-4 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                        {group.title}
                      </div>
                    )}
                    {group.categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleSelect(category.id)}
                        className="block w-full px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.15em] text-mute transition-colors hover:bg-stone hover:text-ink"
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {otherNavItems.map((item) => (
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
