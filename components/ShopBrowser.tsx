"use client";

import { useState } from "react";
import ShopMyEmbed from "./ShopMyEmbed";

export type ShopCategory = {
  id: string;
  title: string;
  src: string;
  cropHeight: number;
  contentHeight: number;
};

export default function ShopBrowser({
  categories,
}: {
  categories: ShopCategory[];
}) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      <nav className="flex gap-1 overflow-x-auto border-b border-ink/10 md:w-52 md:flex-none md:flex-col md:gap-0 md:overflow-visible md:border-b-0 md:border-r">
        {categories.map((category) => {
          const isActive = category.id === active.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={(event) => {
                setActiveId(category.id);
                event.currentTarget.scrollIntoView({
                  behavior: "instant",
                  inline: "center",
                  block: "nearest",
                });
              }}
              aria-current={isActive}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-colors md:whitespace-normal md:border-b-0 md:border-l-2 ${
                isActive
                  ? "border-pine text-pine"
                  : "border-transparent text-mute hover:text-ink"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </nav>

      <div className="min-w-0 flex-1">
        <ShopMyEmbed
          key={active.id}
          title={active.title}
          src={active.src}
          cropHeight={active.cropHeight}
          contentHeight={active.contentHeight}
        />
      </div>
    </div>
  );
}
