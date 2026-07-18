"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ShopSelectionContextValue = {
  activeId: string;
  setActiveId: (id: string) => void;
};

const ShopSelectionContext = createContext<ShopSelectionContextValue | null>(
  null,
);

export function ShopSelectionProvider({
  initialId,
  children,
}: {
  initialId: string;
  children: ReactNode;
}) {
  const [activeId, setActiveId] = useState(initialId);
  return (
    <ShopSelectionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ShopSelectionContext.Provider>
  );
}

export function useShopSelection() {
  const ctx = useContext(ShopSelectionContext);
  if (!ctx) {
    throw new Error(
      "useShopSelection must be used within a ShopSelectionProvider",
    );
  }
  return ctx;
}
