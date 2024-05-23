import "./style.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
        <nav>
        <div className="nav-bar">
          <h1 className="logo">{t("logo")}</h1>
          <ul className="menu">
            <li>
              <a className="menu--item" href="./">
                {t("navigation.home")}
              </a>
            </li>
            <li>
              <a className="menu--item" href="">
                {t("navigation.breath")}
              </a>
            </li>
            <li>
              <a className="menu--item" href="">
                {t("navigation.music")}
              </a>
            </li>
            <li>
              <button type="button" onClick={() => changeLanguage("cs")}>
                cs
              </button>
            </li>
            <li>
              {" "}
              <button type="button" onClick={() => changeLanguage("en")}>
                en
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
}