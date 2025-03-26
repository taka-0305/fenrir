import { FC, ReactNode } from "react";
import { tagGenreClassMap } from "./tagGenreColorMap";
import styles from "./tag.module.scss";

type TagProps = {
  children: ReactNode;
  genre: string;
};

const Tag: FC<TagProps> = ({ children, genre }) => {
  const colorClass = tagGenreClassMap[genre] || "gray";
  return (
    <div className={`${styles.tag} ${styles[colorClass]}`}>
      <p>{children}</p>
    </div>
  );
};

export default Tag;
