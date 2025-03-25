"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Shop = {
  id: string;
  name: string;
  access: { line: string; station: string; walk: string };
  photo: { pc: { l: string } };
};

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const keyword = searchParams.get("keyword") || "";
  const range = Number(searchParams.get("range") || "3");
  const latitude = Number(searchParams.get("lat"));
  const longitude = Number(searchParams.get("lng"));

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
          body: JSON.stringify({
            latitude,
            longitude,
            keyword,
            range,
            start: 1,
          }),
        });

        if (!res.ok) throw new Error("APIエラー");
        const json = await res.json();
        setShops(json.results.shop || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude, keyword, range]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">検索結果</h1>

      {loading && <p>読み込み中...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {shops.map((shop) => (
          <li key={shop.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{shop.name}</h2>
            <p>
              アクセス: {shop.access.line} {shop.access.station}駅 徒歩
              {shop.access.walk}分
            </p>
            {shop.photo?.pc?.l && (
              <img
                src={shop.photo.pc.l}
                alt={shop.name}
                className="mt-2 w-full max-w-xs"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
