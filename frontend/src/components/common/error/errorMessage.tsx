import { FC } from "react";
import styles from "./errorMessage.module.scss";

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
