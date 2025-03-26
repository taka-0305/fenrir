import { ReactNode, FC } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "main" | "header";
};

const Button: FC<ButtonProps> = ({ children, onClick, variant = "main" }) => {
  return (
    <button
      className={`${styles.button} ${variant === "header" ? styles.header : styles.main}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
