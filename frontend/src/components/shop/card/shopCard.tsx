import Link from "next/link";
import Image from "next/image";
import styles from "./shopCard.module.scss";
import ShopTags from "../tags/shopTags";
import { Shop } from "@/types/shop";
import ShopHeader from "@/components/shop/header/shopHeader";

type Props = {
  shop: Shop;
};

const ShopCard = ({ shop }: Props) => {
  return (
    <li className={styles.card}>
      <div className={styles.thumbnail}>
        {shop.photo?.pc?.l && (
          <Image src={shop.photo.pc.l} alt={shop.name} width={300} height={300} />
        )}
      </div>
      <div className={styles.info}>
        <ShopTags shop={shop} />
        <ShopHeader shop={shop} />
        <div className={styles.detail}>
          <p>{shop.mobile_access}</p>
          <p>{shop.budget?.average || "情報なし"}</p>
        </div>
        <Link href={`/detail?id=${shop.id}`} className={styles.link_button}>
          詳細を見る
        </Link>
      </div>
    </li>
  );
};

export default ShopCard;
