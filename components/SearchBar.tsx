"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/lib/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fetchingRef = useRef(false);
  const loading = open && products === null;

  useEffect(() => {
    if (!open || products || fetchingRef.current) return;
    fetchingRef.current = true;
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products ?? []))
      .catch(() => setProducts([]));
  }, [open, products]);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || !products) return [];
    return products.filter((p) => p.title.toLowerCase().includes(q)).slice(0, 8);
  }, [query, products]);

  return (
    <div className="relative" ref={containerRef}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(true)}
        placeholder="Search"
        className="w-40 rounded-full border border-current/25 bg-transparent px-3 py-1.5 text-xs placeholder-current/50 transition-[width] focus:w-56 focus:outline-none focus:ring-1 focus:ring-volt sm:w-48 sm:focus:w-72"
      />

      {open && query.trim() && (
        <div className="absolute right-0 top-full z-50 mt-2 max-h-96 w-72 overflow-y-auto border border-ink/10 bg-paper text-ink shadow-lg sm:w-80">
          {loading && (
            <p className="p-4 text-xs text-mute">Searching…</p>
          )}
          {!loading && results.length === 0 && (
            <p className="p-4 text-xs text-mute">
              No matches for &ldquo;{query}&rdquo;.
            </p>
          )}
          {!loading &&
            results.map((product) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noreferrer nofollow"
                className="flex items-center gap-3 border-b border-ink/5 p-3 last:border-0 hover:bg-stone"
              >
                {product.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    alt=""
                    className="h-12 w-12 flex-none rounded object-cover"
                  />
                )}
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">
                    {product.title}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-mute">
                    {product.categoryTitle}
                    {product.price != null && ` · $${product.price}`}
                  </p>
                </div>
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
