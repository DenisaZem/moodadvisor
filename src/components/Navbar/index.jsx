import "./style.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    if (currentLanguage === "cs") {
      i18n.changeLanguage("en");
    } else if (currentLanguage === "en") {
      i18n.changeLanguage("cs");
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenuHome = () => {
    const location = useLocation();
    const locationPath = location.pathname;
    if (showMenu === true) {
      toggleMenu
    }

    if (locationPath === "/") {
      window.location.reload();
    }
  }

  return (
    <div> 
      <div
        className={showMenu ? "background_black open" : "background_black"}
      ></div>
      <div className={showMenu ? "background-burgerMenu open" : "background-burgerMenu"}></div>
      <nav className="nav-bar">
        <h1 className="logo">
          <Link onClick={toggleMenuHome} to="/">{t("logo")}</Link>
        </h1>
        {showMenu ? (
          <IoClose className="menu-icon-cancel" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
        )}
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li>
            <Link
              onClick={toggleMenuHome}
              className="menu--item"
              to="/"
            >
              {t("navigation.home")}
            </Link>
          </li>
          <li>
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/breath"
            >
              {t("navigation.breath")}
            </Link>
          </li>
          <li>
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/music"
            >
              {t("navigation.music")}
            </Link>
          </li>
          <li>
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/quiz"
            >
              {t("navigation.quiz")}
            </Link>
          </li>
          <div className="buttons-language">
            <li>
              <button
                className="button--toggle-language"
                onClick={toggleLanguage}
              >
                {currentLanguage === "en" ? "Česky" : "English"}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
