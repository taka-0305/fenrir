import styles from "./loadingOverlay.module.scss";

type Props = {
  message?: string;
};

const LoadingOverlay = ({ message = "読み込み中..." }: Props) => {
  return (
    <div className={styles.overlay}>
      <p>{message}</p>
    </div>
  );
};

export default LoadingOverlay;
