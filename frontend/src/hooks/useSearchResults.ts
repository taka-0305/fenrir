"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useShopContext } from "@/context/shopContext";

export const useSearchResults = () => {
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const range = Number(searchParams.get("range") || "3");
  const latitude = Number(searchParams.get("lat"));
  const longitude = Number(searchParams.get("lng"));

  const { allShops, setAllShops } = useShopContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const shopsPerPage = 10;
  const totalPages = Math.ceil(allShops.length / shopsPerPage);

  const currentShops = allShops.slice((currentPage - 1) * shopsPerPage, currentPage * shopsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      if (!latitude || !longitude) {
        setError("位置情報がありません");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("/api/hotpepper", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ latitude, longitude, keyword, range }),
        });

        if (!res.ok) throw new Error("APIエラー");

        const json = await res.json();
        setAllShops(json.results.shop || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude, keyword, range, setAllShops]);

  return {
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalPages,
    currentShops,
  };
};
