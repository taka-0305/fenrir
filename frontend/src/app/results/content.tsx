"use client";

import { useSearchResults } from "@/hooks/useSearchResults";
import Pagination from "@/components/pagination/pagination";
import styles from "./page.module.scss";
import ShopCard from "@/components/shop/card/shopCard";
import PageLayout from "@/layouts/page/pageLayout";
import LoadingOverlay from "@/components/common/loading/loadingOverlay";

export default function ResultsContent() {
  const { loading, error, currentPage, setCurrentPage, totalPages, currentShops } =
    useSearchResults();

  return (
    <>
      {loading ? (
        <LoadingOverlay message="店舗情報を取得中..." />
      ) : (
        <PageLayout>
          <h1 className={styles.title}>検索結果</h1>

          {error && <p className="text-red-500">{error}</p>}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <ul className={styles.ul}>
            {currentShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </PageLayout>
      )}
    </>
  );
}
