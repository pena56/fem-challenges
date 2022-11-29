import mobileImage from "../../assets/images/image-web-3-mobile.jpg";
import desktopImage from "../../assets/images/image-web-3-desktop.jpg";

import style from "./style.module.scss";

export default function Index() {
  return (
    <picture className={style.container}>
      <source media="(min-width: 900px)" srcSet={desktopImage} />
      <img src={mobileImage} alt="" />
    </picture>
  );
}
