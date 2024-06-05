import { Link } from "react-router-dom";
import "./style.css";
import { OneBreathExercise } from "../OneBreathExercise";
import { CarouselMenu } from "../../components/CarouselMenu";

export const breathData = [
  {
    id: "0",
    title: "nazev1",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
  {
    id: "1",
    title: "nazev2",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
  {
    id: "2",
    title: "nazev3",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
  {
    id: "3",
    title: "nazev4",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
  {
    id: "4",
    title: "nazev5",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
  {
    id: "5",
    title: "nazev5",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg",
  },
];

export const BreathPage = () => {
  return (
    <div className="container__breathPage">
      <h1 className="container__breathPage--title">Dechové cvičení</h1>
      <CarouselMenu breathData={breathData} />
    </div>
  );
};

{
  /* <Link to="/breath/exercise">Na dechové cvičení</Link> */
}
