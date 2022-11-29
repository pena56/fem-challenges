import style from "./style.module.scss";
import CloseMenu from "../../assets/images/icon-menu-close.svg";

interface SidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Index({ show, setShow }: SidebarProps) {
  return (
    <aside className={`${style.container} ${show ? style.show : style.hide}`}>
      <div>
        <img
          aria-label="menuIcon"
          role="button"
          tabIndex={0}
          src={CloseMenu}
          alt=""
          onClick={() => setShow(false)}
          onKeyDown={() => setShow(false)}
        />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </aside>
  );
}
