import './style.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';
export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav-bar">
      <h1 className="logo">{t('logo')}</h1>
      <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
      {/* <div className={`menu ${showMenu ? 'show' : ''}`}> */}
        <ul className={`menu ${showMenu ? 'show' : ''}`} >
          <li>
            <Link className="menu--item" to="/">
              {t('navigation.home')}
            </Link>
          </li>
          <li>
            <Link className="menu--item" to="/breath">
              {t('navigation.breath')}
            </Link>
          </li>
          <li>
            <Link className="menu--item" to="/music">
              {t('navigation.music')}
            </Link>
          </li>
          <li>
            <Link className="menu--item" to="/quiz">
              {t('navigation.quiz')}
            </Link>
          </li>
          <div className="buttons-language">
          <li className='button-language__cs'>
            <button type="button" onClick={() => changeLanguage('cs')}>
              cs
            </button>
          </li>
          <li className='button-language__en'>
            <button type="button" onClick={() => changeLanguage('en')}>
              en
            </button>
          </li>
          </div>
        </ul>
      {/* </div> */}
    </nav>
  );
};
