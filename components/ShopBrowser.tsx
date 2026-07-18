"use client";

import { useState } from "react";
import ShopMyEmbed from "./ShopMyEmbed";
import { useShopSelection } from "./ShopSelection";

export type ShopCategory = {
  id: string;
  title: string;
  src: string;
  cropHeight: number;
  contentHeight: number;
};

export type ShopGroup = {
  id: string;
  title: string;
  categories: ShopCategory[];
};

export default function ShopBrowser({ groups }: { groups: ShopGroup[] }) {
  const allCategories = groups.flatMap((group) => group.categories);
  const { activeId, setActiveId } = useShopSelection();
  const active = allCategories.find((c) => c.id === activeId) ?? allCategories[0];

  const activeGroup = groups.find((group) =>
    group.categories.some((c) => c.id === active.id),
  );
  const [hoveredGroupId, setHoveredGroupId] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      <nav className="hidden md:flex md:w-56 md:flex-none md:flex-col md:border-r md:border-ink/10">
        {groups.map((group) => {
          const hasSubcategories = group.categories.length > 1;

          if (!hasSubcategories) {
            const category = group.categories[0];
            const isActive = category.id === active.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                aria-current={isActive}
                className={`border-l-2 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-pine text-pine"
                    : "border-transparent text-mute hover:text-ink"
                }`}
              >
                {category.title}
              </button>
            );
          }

          const isOpen =
            group.id === activeGroup?.id || group.id === hoveredGroupId;

          return (
            <div
              key={group.id}
              onMouseEnter={() => setHoveredGroupId(group.id)}
              onMouseLeave={() =>
                setHoveredGroupId((current) =>
                  current === group.id ? null : current,
                )
              }
            >
              <div className="flex items-center justify-between px-4 pb-1 pt-6 text-left text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40">
                {group.title}
                <span
                  className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </div>
              {isOpen &&
                group.categories.map((category) => {
                  const isActive = category.id === active.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveId(category.id)}
                      aria-current={isActive}
                      className={`block w-full border-l-2 px-4 py-3 pl-6 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                        isActive
                          ? "border-pine text-pine"
                          : "border-transparent text-mute hover:text-ink"
                      }`}
                    >
                      {category.title}
                    </button>
                  );
                })}
            </div>
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
