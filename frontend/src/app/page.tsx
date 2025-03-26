"use client";

import SearchForm from "@/components/searchForm/searchForm";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>現在地でお店を検索</h1>
      <SearchForm variant="main" />
    </div>
  );
}
