import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <ul className="footer--menu">
        <li>
          <Link className="footer--menu--item" to="/about-us">
            {t("footer.aboutUs")}
          </Link>
        </li>
        <li>
          <Link className="footer--menu--item" to="/about">
            {t("footer.aboutProject")}
          </Link>
        </li>
        <li>
          <a className="footer--menu--item" href="https://www.czechitas.cz/">
            {t("footer.organization")}
          </a>
        </li>
      </ul>
    </footer>
  );
};
