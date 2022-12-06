import style from "./style.module.scss";

interface ButtonProps {
  label: string;
}

export default function Index({ label }: ButtonProps) {
  return (
    <button type="submit" className={style.button}>
      {label}
    </button>
  );
}
