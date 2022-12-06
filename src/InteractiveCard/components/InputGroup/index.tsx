import { useState, useEffect } from "react";

import style from "./style.module.scss";
import { InputProps } from "../Input";

export default function InputGroup({
  id,
  setValue,
  errorMessage,
  label,
  placeholder,
  maxLength,
}: InputProps) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  useEffect(() => {
    setValue(`${input1}/${input2}`);
  }, [input1, input2, setValue]);

  return (
    <label className={style.formGroup} htmlFor={id}>
      {label}

      <div className={style.formRow}>
        <input
          className={errorMessage && style.error}
          type="text"
          id={id}
          placeholder={placeholder.split("/")[0]}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          maxLength={maxLength}
        />
        <input
          className={errorMessage && style.error}
          type="text"
          id={id}
          placeholder={placeholder.split("/")[1]}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          maxLength={maxLength}
        />
      </div>
      {errorMessage && <small>{errorMessage}</small>}
    </label>
  );
}
