import "./style.css";
import zarovka from "./img/zarovka.png";
import note from "./img/note.png";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-project--container">
      <h2 className="about-project--logo">{t("about.title")}</h2>
      <p className="about-project--title">{t("about.description")}</p>
      <div className="about-project--imgs">
        <img className="about-project--img" src={zarovka} alt="zarovka" />
        <img className="about-project--img" src={note} alt="blocek" />
      </div>
    </div>
  );
};
