import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Layout } from "../../components/Layout";
import "./style.css";
import breath from "./img/1.png";
import music from "./img/2.png";
import exercie from "./img/3.png";

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Layout>
        <div className="container__quiz">
          <h1 className="quiz-logo">MoodAdviser</h1>
          <h2 className="error-message">{t("errorMessage")}</h2>
          <div className="quiz__lastSentence">
            <div className="quiz__lastSentence--recommended">
              {t("quiz.last")}
            </div>
            <div className="quiz__lastSentence-menu">
              <a className="quiz__lastSentence-menu-link" href="/breath">
                <img src={breath} alt="breath" />
                <p className="quiz__lastSentence-menu--link-text">
                  {t("navigation.breath")}
                </p>
              </a>
              <a className="quiz__lastSentence-menu--link" href="/music">
                <img src={music} alt="music" />
                <p className="quiz__lastSentence-menu--link-text">
                  {t("navigation.music")}
                </p>
              </a>
              <a className="quiz__lastSentence-menu--link" href="/exercises">
                <img src={exercie} alt="exercises" />
                <p className="quiz__lastSentence-menu--link-text">
                  {t("navigation.exercises")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};
