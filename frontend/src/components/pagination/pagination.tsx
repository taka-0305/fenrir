"use client";

import { FC, useState, FormEvent } from "react";
import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState(currentPage);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.button_lists}>
        {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>◀ 前へ</button>}

        <span>
          ページ {currentPage} / {totalPages}
        </span>

        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)}>次へ ▶</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
