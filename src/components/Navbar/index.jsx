import "./style.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

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
      toggleMenu;
    }

    if (locationPath === "/") {
      window.location.reload();
    }
  };

   // zákaz scrolování během otevřeného hamburger menu
   useEffect(() => {
    if (showMenu) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [showMenu]);

  // zavření hamburger menu při změně šířky okna
  useEffect(() => {
    const closeMenuOnResize = () => {
      setShowMenu(false);
    };
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, [showMenu]);

  // zavření hamburger menu při kliknutí mimo NavBar
  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      const isClickOnBackground =
        e.target.classList.contains("background_black");
      const isClickOnNavBarList = e.target.classList.contains(
        "background-burgerMenu"
      );

      if (showMenu && isClickOnBackground && !isClickOnNavBarList) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [showMenu]);

  return (
    <div className="container__navbar">
      <div className="navbar__backgrounds">
        <div
          className={showMenu ? "background__black open" : "background__black"}
        ></div>
        <div
          className={
            showMenu ? "background__burgerMenu open" : "background__burgerMenu"
          }
        ></div> 
      </div>
      <nav className="navbar__content">
        <h1 className="navbar__logo">
          <Link onClick={toggleMenuHome} to="/">
            {t("logo")}
          </Link>
        </h1>
        {showMenu ? (
          <IoClose className="menu-icon--cancel" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
        )}
        <ul className={`navbar__menu ${showMenu ? "show" : ""}`}>
          <li className="menu-one-item">
            <Link onClick={toggleMenuHome} className="menu--item" to="/">
              {t("navigation.home")}
            </Link>
          </li>
          <li className="menu-one-item">
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/breath"
            >
              {t("navigation.breath")}
            </Link>
          </li>
          <li className="menu-one-item">
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/music"
            >
              {t("navigation.music")}
            </Link>
          </li>
          <li className="menu-one-item">
            <Link
              onClick={showMenu ? toggleMenu : null}
              className="menu--item"
              to="/exercises"
            >
              {t("navigation.exercises")}
            </Link>
          </li>
          <div className="buttons-language">
            <li className="menu-one-item">
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
