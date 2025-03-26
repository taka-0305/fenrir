"use client";

import { ReactNode } from "react";
import { ShopProvider } from "@/context/shopContext";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <ShopProvider>{children}</ShopProvider>;
}
