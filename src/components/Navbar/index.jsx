import { useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

// npm install hamburger-react https://hamburger-react.netlify.app/

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="nav-bar">
        <h1 className="logo">{t("logo")}</h1>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#4a6670"/>
        {isOpen && (
            <ul className="menu__mobile">
              <li>
                <Link to="/">{t("navigation.home")}</Link>
              </li>
              <li>
                <Link to="/breath">{t("navigation.breath")}</Link>
              </li>
              <li>
                <Link to="/music">{t("navigation.music")}</Link>
              </li>
              <li>
                <Link to="/quiz">{t("navigation.quiz")}</Link>
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
        )}
      </div>

      <div className="nav-bar">
        <h1 className="logo">{t("logo")}</h1>
        <ul className="menu">
          <li>
            <Link to="/">{t("navigation.home")}</Link>
          </li>
          <li>
            <Link to="/breath">{t("navigation.breath")}</Link>
          </li>
          <li>
            <Link to="/music">{t("navigation.music")}</Link>
          </li>
          <li>
            <Link to="/quiz">{t("navigation.quiz")}</Link>
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
  );
};
