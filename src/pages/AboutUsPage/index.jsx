import "./style.css";
import deni from "./img/deni.png";
import sarka from "./img/sarka.png";
import { useTranslation } from "react-i18next";

export const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container-about-us">
      <div className="about-us--title">
        <h2 className="about-us--item about-us--title--name">
          {t("aboutUs.denisa.title")}
        </h2>
        <span className="about-us--item ">
          <a className="about-us--link" href="https://www.linkedin.com/in/denisa-zemanov%C3%A1-a369ab118/" target="_blank">
            LinkedIn
          </a>{" "}
          |{" "}
          <a className="about-us--link" href="https://github.com/DenisaZem" target="_blank">
            GitHub
          </a>
        </span>
        <h3 className="about-us--item about-us--title--name__deni">
          {t("aboutUs.denisa.subtitle")}
        </h3>
        <p className="about-us--item about-us--title--paragraph">
          {t("aboutUs.denisa.description")}
        </p>
        <img className="about-us--title--img" src={deni} alt="deni avatar" />
      </div>

      <div className="about-us--title about-us--title--sarka">
        <h2 className="about-us--item about-us--title--name">
          {t("aboutUs.sarka.title")}
        </h2>
        <span className="about-us--item">
          <a
            className="about-us--link"
            href="https://www.linkedin.com/in/sarka-flidrova"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a className="about-us--link" href="https://github.com/suffle-girl" target="_blank">
            GitHub
          </a>
        </span>
        <h3 className="about-us--item about-us--title--name__sarka">
          {t("aboutUs.sarka.subtitle")}
        </h3>
        <p className="about-us--item about-us--title--paragraph">
          {t("aboutUs.sarka.description")}
        </p>
        <img
          className="about-us--title--img about-us--title--img__sarka"
          src={sarka}
          alt="sarka avatar"
        />
      </div>
    </div>
  );
};
