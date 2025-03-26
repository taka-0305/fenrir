"use client";

import Link from "next/link";
import SearchForm from "@/components/searchForm/searchForm";
import styles from "./header.module.scss";

export default function HeaderWithSearch() {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <Link href="/">
          <h2 className={styles.title}>Hotpepper</h2>
        </Link>
      </div>
      <SearchForm variant="header" />
    </header>
  );
}
