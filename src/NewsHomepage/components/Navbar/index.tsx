import { useState } from "react";

import Sidebar from "../Sidebar";

import Logo from "../../assets/images/logo.svg";
import OpenMenu from "../../assets/images/icon-menu.svg";

import style from "./style.module.scss";

export default function Index() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <nav className={style.container}>
      <img aria-label="menuIcon" role="button" tabIndex={0} src={Logo} alt="" />
      <img
        aria-label="menuIcon"
        role="button"
        tabIndex={0}
        onKeyDown={() => setShowSidebar(true)}
        onClick={() => setShowSidebar(true)}
        className={style.menuIcon}
        src={OpenMenu}
        alt=""
      />
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
    </nav>
  );
}
