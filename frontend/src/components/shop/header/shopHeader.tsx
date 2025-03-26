import { FC } from "react";
import { Shop } from "@/types/shop";
import styles from "./shopHeader.module.scss";

type Props = {
  shop: Shop;
};

const ShopHeader: FC<Props> = ({ shop }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.name}>{shop.name}</h2>
      <p className={styles.catch}>{shop.catch}</p>
    </div>
  );
};

export default ShopHeader;
