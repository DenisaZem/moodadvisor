// import { Link } from "react-router-dom";
import "./style.css";
import { CarouselMenu } from "../../components/CarouselMenu";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";


export const breathData = [
  {
    id: "0",
    title: "Nepanikař",
    picture: obrazek1,
  },
  {
    id: "1",
    title: "Hoď se do klidu",
    picture: obrazek2,
  },
  {
    id: "2",
    title: "Klídeček",
    picture: obrazek3,
  },
  {
    id: "3",
    title: "Meditace",
    picture: obrazek1,
  }
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
