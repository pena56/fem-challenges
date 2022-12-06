/* eslint-disable react/require-default-props */
import style from "./style.module.scss";

export interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  maxLength?: number;
}

export default function Input({
  id,
  value,
  setValue,
  errorMessage,
  label,
  placeholder,
  maxLength = 524288,
}: InputProps) {
  return (
    <label className={style.formGroup} htmlFor={id}>
      {label}
      <input
        maxLength={maxLength}
        className={errorMessage && style.error}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {errorMessage && <small>{errorMessage}</small>}
    </label>
  );
}
