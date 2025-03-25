"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [keyword, setKeyword] = useState("");
  const [range, setRange] = useState(3);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setError("位置情報の取得に失敗しました");
        }
      );
    } else {
      setError("このブラウザでは位置情報が使えません");
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!latitude || !longitude) {
      setError("現在地が取得できていません");
      return;
    }

    const params = new URLSearchParams({
      keyword,
      range: range.toString(),
      lat: latitude.toString(),
      lng: longitude.toString(),
    });

    router.push(`/results?${params.toString()}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">現在地でお店を検索</h1>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="キーワード（例: カフェ）"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 w-full"
        />

        <select
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
          className="border p-2 w-full"
        >
          <option value={1}>300m</option>
          <option value={2}>500m</option>
          <option value={3}>1000m</option>
          <option value={4}>2000m</option>
          <option value={5}>3000m</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          検索
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
