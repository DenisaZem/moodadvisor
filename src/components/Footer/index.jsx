import { Link } from "react-router-dom"
import "./style.css"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const {t} = useTranslation();

    return ( 
        <footer className="footer">
            <ul className="footer--menu">
                <li className="footer--menu--item"><Link>{t("footer.aboutUs")}</Link></li>
                <li className="footer--menu--item"><Link>{t("footer.aboutProject")}</Link></li>
                <li className="footer--menu--item"><a href="">{t("footer.organization")}</a></li>
            </ul>
            <p className="footer--copy">
            {t("footer.copy")}
            </p>
        </footer>
    )
}
