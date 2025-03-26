import { ReactNode } from "react";
import HeaderWithSearch from "@/layouts/header/header";
import styles from "./pageLayout.module.scss";

type Props = {
  children: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderWithSearch />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PageLayout;
