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
        {exercisesData.map((item) => {
          return (
            <Link
              to={`/exercises/${item.url}`}
              key={item.id}
              className="exercise-menu--tile"
              href=""
            >
              <img
                src={item.picture}
                className="container__exerciseLink"
                alt="picture"
              />
              <div className="container__exerciseLink">{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
