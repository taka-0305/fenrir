import { FC } from "react";
import Tag from "@/components/ui/tag/tag";
import { Shop } from "@/types/shop";
import styles from "./ShopTags.module.scss";

type Props = {
  shop: Shop;
};

const ShopTags: FC<Props> = ({ shop }) => {
  return (
    <div className={styles.tags}>
      <Tag genre="genre">{shop.genre.name}</Tag>
      <Tag genre="catch">{shop.genre.catch}</Tag>
    </div>
  );
};

export default ShopTags;
