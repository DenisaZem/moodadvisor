import "./style.css";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import { Link, Outlet } from "react-router-dom";

export const exercisesData = [
  {
    id: "0",
    title: "Pět smyslů",
    url: "senses",
    picture: obrazek1,
  },
  {
    id: "1",
    title: "Počítání",
    url: "counting",
    picture: obrazek2,
  },
  {
    id: "2",
    title: "Plánovač tras",
    url: "map",
    picture: obrazek3,
  },
];

export const ExercisesPage = () => {
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
              <div className="container__exerciseLink">{exercisesData[0].title}</div>
            </Link>

            <Link
              to={`/exercises/${exercisesData[1].url}`}
              className="exercise-menu--tile"
              href=""
            >
              <div className="container__exerciseLink">{exercisesData[1].title}</div>
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
              <div className="container__exerciseLink">{exercisesData[2].title}</div>
            </Link>

      </div>
    </div>
  );
};
