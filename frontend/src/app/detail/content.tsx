"use client";

import { useRouter } from "next/navigation";
import { useShopDetail } from "@/hooks/useShopDetail";
import ShopTags from "@/components/shop/tags/shopTags";
import { getShopInfoList } from "./shopInfoList";
import LoadingOverlay from "@/components/common/loading/loadingOverlay";
import ShopHeader from "@/components/shop/header/shopHeader";
import ErrorMessage from "@/components/common/error/errorMessage";
import Image from "next/image";
import styles from "./page.module.scss";

export default function DetailContent() {
  const { shop, loading, error } = useShopDetail();
  const router = useRouter();

  if (loading) return <LoadingOverlay message="店舗情報を取得中..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!shop) return <ErrorMessage message="店舗情報がありません。" />;

  const shopInfoList = getShopInfoList(shop);

  return (
    <>
      <button onClick={() => router.back()} className={styles.prev_button}>
        ← 検索結果に戻る
      </button>
      <div className={styles.wrapper}>
        <div className={styles.thumbnail}>
          {shop.photo?.pc?.l && (
            <Image src={shop.photo.pc.l} alt={shop.name} width={400} height={400} />
          )}
        </div>
        <div className={styles.info}>
          <ShopTags shop={shop} />
          <ShopHeader shop={shop} />
          <div className={styles.link}>
            {shop.urls?.pc && (
              <a href={shop.urls.pc} target="_blank" rel="noopener noreferrer">
                ホットペッパーで見る
              </a>
            )}
          </div>
          <div className={styles.info_detail}>
            <table className={styles.table}>
              <tbody>
                {shopInfoList.map(({ label, value }) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value || "不明"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
