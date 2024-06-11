import { Link } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <ul className="footer--menu">
        <li className="footer--menu--item">
          <Link to="/about-us">{t("footer.aboutUs")}</Link>
        </li>
        <li className="footer--menu--item">
          <Link to="/about">{t("footer.aboutProject")}</Link>
        </li>
        <li className="footer--menu--item">
          <a href="https://www.czechitas.cz/">{t("footer.organization")}</a>
        </li>
      </ul>
    </footer>
  );
};
