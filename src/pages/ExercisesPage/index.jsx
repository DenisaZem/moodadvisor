import "./style.css";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const exercisesData = [
  // 0
  {
    title: "exercises.0",
    url: "senses",
    picture: obrazek1,
  },
  // 1
  {
    title: "exercises.1",
    url: "counting",
    picture: obrazek2,
  },
  // 2
  {
    title: "exercises.2",
    url: "map",
    picture: obrazek3,
  },
];

export const ExercisesPage = () => {
  const {t} = useTranslation();
  return (
    <div className="container">
      <h1 className="exercise-title">Cvičení</h1>
      <div className="exercise-menu">
            <Link
              to={`/exercises/${exercisesData[0].url}`}
              className="exercise-menu--tile"
              href=""
            >
              <img
                src={exercisesData[0].picture}
                className="container__exerciseLink"
                alt="picture"
              />
              <div className="container__exerciseLink">{t(exercisesData[0].title)}</div>
            </Link>

            <Link
              to={`/exercises/${exercisesData[1].url}`}
              className="exercise-menu--tile"
              href=""
            >
              <div className="container__exerciseLink">{t(exercisesData[1].title)}</div>
              <img
                src={exercisesData[1].picture}
                className="container__exerciseLink"
                alt="picture"
              />
            </Link>

            <Link
              to={`/exercises/${exercisesData[2].url}`}
              className="exercise-menu--tile"
              href=""
            >
              <img
                src={exercisesData[2].picture}
                className="container__exerciseLink"
                alt="picture"
              />
              <div className="container__exerciseLink">{t(exercisesData[2].title)}</div>
            </Link>

      </div>
    </div>
  );
};
