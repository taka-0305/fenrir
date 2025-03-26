import { FC, ChangeEventHandler, ReactNode } from "react";
import styles from "./select.module.scss";

type SelectProps = {
  value: number | string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
};

const Select: FC<SelectProps> = ({ value, onChange, children }) => {
  return (
    <div className={styles.select}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default Select;
