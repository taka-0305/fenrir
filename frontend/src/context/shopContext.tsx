"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Shop } from "@/types/shop";

const ShopContext = createContext<{
  allShops: Shop[];
  setAllShops: (shops: Shop[]) => void;
}>({
  allShops: [],
  setAllShops: () => {},
});

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [allShops, setAllShops] = useState<Shop[]>([]);

  return (
    <ShopContext.Provider value={{ allShops, setAllShops }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
