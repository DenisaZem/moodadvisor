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
    <div className="container__exercisesPage">
      <h1 className="exercisesPage__title">{t("exercisesPage")}</h1>
      <div className="exercisesPage__menu">
        {exercisesData.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/exercises/${item.url}`}
              className="exercisesPage__menu-title"
              href=""
            >
              <img
                src={item.picture}
                className="exercisesPage--link"
                alt="picture"
              />
              <div className="exercisesPage--link">
                {t(`exercises.${index}`)}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
