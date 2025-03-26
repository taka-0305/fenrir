"use client";

import { useSearchForm } from "@/hooks/useSearchForm";
import InputText from "@/components/ui/inputText/inputText";
import Select from "@/components/ui/select/select";
import Button from "@/components/ui/button/button";
import styles from "./searchForm.module.scss";

type Props = {
  variant?: "main" | "header";
};

export default function SearchForm({ variant = "main" }: Props) {
  const { keyword, setKeyword, range, setRange, error, handleSearch } =
    useSearchForm();

  const placeholder =
    variant === "header" ? "検索する範囲" : "検索する範囲を選択してください";

  const distanceOptions = [
    { label: placeholder, value: "" },
    { label: "300m", value: 1 },
    { label: "500m", value: 2 },
    { label: "1000m", value: 3 },
    { label: "2000m", value: 4 },
    { label: "3000m", value: 5 },
  ];

  return (
    <form
      onSubmit={handleSearch}
      className={`${styles.form} ${
        variant === "header" ? styles.header : styles.main
      }`}
    >
      <div className={styles.form_wrapper}>
        <InputText
          value={keyword}
          placeholder="キーワード（例: カフェ）"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Select
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        >
          {distanceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
        <Button variant={variant}>検索</Button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
}
