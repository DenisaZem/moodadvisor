import "./style.css";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import obrazek4 from "./img/4.png";
import obrazek5 from "./img/5.png";
import obrazek6 from "./img/6.png";
import { CarouselMenu } from "../../components/CarouselMenu";
import { useTranslation } from "react-i18next";

export const musicData = [
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
  {
    id: "4",
    picture: obrazek5,
  },
  {
    id: "5",
    picture: obrazek6,
  },
];

export const SoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container__mainSoundMenu">
      <h1 className="container__mainSoundMenu--title">{t("soundPage")}</h1>
      <CarouselMenu musicData={musicData} />
    </div>
  );
};
