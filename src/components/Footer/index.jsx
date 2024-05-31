import { Link } from "react-router-dom"
import "./style.css"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="footer">
            <ul>
                <li><Link>{t("footer.aboutUs")}</Link></li>
                <li><Link>{t("footer.aboutProject")}</Link></li>
                <li><a href="">{t("footer.organization")}</a></li>
            </ul>
            <p>
            {t("footer.copy")}
            </p>
        </footer>
    )
}
