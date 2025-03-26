import { FC, ChangeEventHandler } from "react";
import styles from "./inputText.module.scss";

type InputTextProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const InputText: FC<InputTextProps> = ({
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input_text}
    />
  );
};

export default InputText;
