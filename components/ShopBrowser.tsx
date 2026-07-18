"use client";

import { Fragment, useState } from "react";
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
  const [openGroupIds, setOpenGroupIds] = useState<Set<string>>(
    new Set(activeGroup ? [activeGroup.id] : []),
  );

  const toggleGroup = (groupId: string) => {
    setOpenGroupIds((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      <nav className="hidden md:flex md:w-56 md:flex-none md:flex-col md:border-r md:border-ink/10">
        {groups.map((group) => {
          const hasSubcategories = group.categories.length > 1;
          const isOpen = openGroupIds.has(group.id);

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

          return (
            <Fragment key={group.id}>
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isOpen}
                className="flex items-center justify-between px-4 pb-1 pt-6 text-left text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40 transition-colors first:pt-6 hover:text-ink/70"
              >
                {group.title}
                <span
                  className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </button>
              {isOpen &&
                group.categories.map((category) => {
                  const isActive = category.id === active.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveId(category.id)}
                      aria-current={isActive}
                      className={`border-l-2 px-4 py-3 pl-6 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                        isActive
                          ? "border-pine text-pine"
                          : "border-transparent text-mute hover:text-ink"
                      }`}
                    >
                      {category.title}
                    </button>
                  );
                })}
            </Fragment>
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
