"use client";

import { useRouter } from "next/navigation";
import { useShopDetail } from "@/hooks/useShopDetail";
import ShopTags from "@/components/shop/tags/shopTags";
import { getShopInfoList } from "./shopInfoList";
import PageLayout from "@/layouts/page/pageLayout";
import LoadingOverlay from "@/components/common/loading/loadingOverlay";
import ShopHeader from "@/components/shop/header/shopHeader";
import ErrorMessage from "@/components/common/error/errorMessage";
import styles from "./page.module.scss";

export default function DetailPage() {
  const { shop, loading, error } = useShopDetail();
  const router = useRouter();

  if (loading) return <LoadingOverlay message="店舗情報を取得中..." />;
  if (error)
    return (
      <PageLayout>
        <ErrorMessage message={error} />
      </PageLayout>
    );
  if (!shop)
    return (
      <PageLayout>
        <ErrorMessage message="店舗情報がありません。" />
      </PageLayout>
    );

  const shopInfoList = getShopInfoList(shop);

  return (
    <PageLayout>
      <button onClick={() => router.back()} className={styles.prev_button}>
        ← 検索結果に戻る
      </button>
      <div className={styles.wrapper}>
        <div className={styles.thumbnail}>
          {shop.photo?.pc?.l && (
            <img
              src={shop.photo.pc.l}
              alt={shop.name}
              className="mb-4 rounded shadow"
            />
          )}
        </div>
        <div className={styles.info}>
          <ShopTags shop={shop} />
          <ShopHeader shop={shop} />
          <div className={styles.link}>
            {shop.urls?.pc && (
              <a
                href={shop.urls.pc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-blue-600 underline"
              >
                ホットペッパーで見る
              </a>
            )}
          </div>
          <div className={styles.info_detail}>
            <table className={styles.table}>
              <tbody>
                {shopInfoList.map(({ label, value }) => (
                  <tr key={label}>
                    <th className="py-2 pr-4 text-left font-semibold w-40">
                      {label}
                    </th>
                    <td className="py-2">{value || "不明"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
