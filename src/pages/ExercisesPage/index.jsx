import "./style.css";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const exercisesData = [
  // 0
  {
    url: "senses",
    picture: obrazek1,
  },
  // 1
  {
    url: "counting",
    picture: obrazek2,
  },
  // 2
  {
    url: "journal",
    picture: obrazek3,
  },
];

export const ExercisesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="exercisesPage">
      <h1 className="exercise-title">{t("exercisesPage")}</h1>
      <div className="exercise-menu">
        {exercisesData.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/exercises/${item.url}`}
              className="exercise-menu--tile"
              href=""
            >
              <img
                src={item.picture}
                className="container__exerciseLink"
                alt="picture"
              />
              <div className="container__exerciseLink">
                {t(`exercises.${index}`)}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
