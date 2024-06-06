import "./style.css";
import zarovka from "./img/zarovka.jpg"
import note from "./img/note.jpg"
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
    const {t} = useTranslation();

  return (
    <div className="container">
      <div className="AboutProject">
        <div className="AboutProject__title">
          <div className="about-project__container1">
            <img
              className="about__project--zarovkaImg"
              src={zarovka}
              alt="zarovka"
            />
            <h2 className="about-project--name">{t("about.title")}</h2>
          </div>
          <div className="about-project__container2">
            <p className="about__project--title">
                {t("about.description")}
            </p>
            <img
              className="about__project--noteImg"
              src={note}
              alt="blocek"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
