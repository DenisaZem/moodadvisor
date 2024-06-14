// import { Link } from "react-router-dom";
import "./style.css";
import { CarouselMenu } from "../../components/CarouselMenu";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import obrazek4 from "./img/4.png";


import { useTranslation } from "react-i18next";

export const breathData = [
  {
    id: "0",
    picture: obrazek1,
  },
  {
    id: "1",
    picture: obrazek2,
  },
  {
    id: "2",
    picture: obrazek3,
  },
  {
    id: "3",
    picture: obrazek4,
  },
];

export const BreathPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container__breathPage">
      <h1 className="container__breathPage-title">{t("breathPage")}</h1>
      <CarouselMenu
        className="breathPage__carouselMenu"
        breathData={breathData}
      />
    </div>
  );
};

{
  /* <Link to="/breath/exercise">Na dechové cvičení</Link> */
}
