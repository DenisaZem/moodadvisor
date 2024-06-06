import "./style.css";
import deni from "./img/deni.png";
import sarka from "./img/sarka.png";
import { useTranslation } from "react-i18next";

export const AboutUsPage = () => {
  const {t} = useTranslation();

  return (
    <div className="container">
      <div className="about-us">
        <div className="about-us--title">
          <img className="about-us--title--img" src={deni} alt="deni avatar" />
          <div className="about-us--title--text">
            <h2 className="about-us--title--name">{t("aboutUs.denisa.title")}</h2>
            <span>
              <a href="">LinkedIn</a> | <a href="">GitHub</a>
            </span>
            <h3 className="about-us--title--name__deni">
            {t("aboutUs.denisa.subtitle")}
            </h3>
            <p className="about-us--title--paragraph">
            {t("aboutUs.denisa.description")}
            </p>
          </div>
        </div>

        <div className="about-us--title about-us--title--sarka">
          <div className="about-us--title--text">
            <h2 className="about-us--title--name">{t("aboutUs.sarka.title")}</h2>
            <span>
              <a href="https://www.linkedin.com/in/sarka-flidrova">LinkedIn</a> | <a href="https://github.com/suffle-girl">GitHub</a>
            </span>
            <h3 className="about-us--title--name__sarka">{t("aboutUs.sarka.subtitle")}</h3>
            <p className="about-us--title--paragraph">
            {t("aboutUs.sarka.description")}
            </p>
          </div>
          <img
            className="about-us--title--img"
            src={sarka}
            alt="sarka avatar"
          />
        </div>
      </div>
    </div>
  );
};
