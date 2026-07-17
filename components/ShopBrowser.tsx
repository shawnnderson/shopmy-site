"use client";

import { Fragment, useState } from "react";
import ShopMyEmbed from "./ShopMyEmbed";

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
  const [activeId, setActiveId] = useState(allCategories[0].id);
  const active =
    allCategories.find((c) => c.id === activeId) ?? allCategories[0];

  return (
    <div className="flex flex-col md:flex-row md:items-stretch">
      <nav className="flex gap-1 overflow-x-auto border-b border-ink/10 md:w-56 md:flex-none md:flex-col md:gap-0 md:overflow-visible md:border-b-0 md:border-r">
        {groups.map((group) => {
          const hasSubcategories = group.categories.length > 1;
          return (
            <Fragment key={group.id}>
              {hasSubcategories && (
                <div className="hidden shrink-0 px-4 pb-1 pt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/40 md:block">
                  {group.title}
                </div>
              )}
              {group.categories.map((category) => {
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
                    className={`whitespace-nowrap border-b-2 py-3 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-colors md:whitespace-normal md:border-b-0 md:border-l-2 ${
                      hasSubcategories ? "px-4 md:pl-6" : "px-4"
                    } ${
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
