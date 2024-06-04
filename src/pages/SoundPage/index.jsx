import "./style.css";
import obrazek1 from "./img/1.png";
import obrazek2 from "./img/2.png";
import obrazek3 from "./img/3.png";
import obrazek4 from "./img/4.png";
import obrazek5 from "./img/5.png";
import obrazek6 from "./img/6.png";
import { CarouselMenu } from "../../components/CarouselMenu";


 export const musicData = [
  {
    id: "0",
    title: "Stimulující nálada",
    audioUrl: "/components/Sound/music/zkouska.mp3",
    picture: obrazek1,
  },
  {
    id: "1",
    title: "Meditační symfonie",
    audioUrl: "/components/Sound/music/zkouska2.mp3",
    picture: obrazek2,
  },
  {
    id: "2",
    title: "Tóny lesa",
    audioUrl: "/components/Sound/music/zkouska3.mp3",
    picture: obrazek3,
  },
  {
    id: "3",
    title: "Harmonická melodie",
    audioUrl: "/components/Sound/music/zkouska4.mp3",
    picture: obrazek4,
  },
  {
    id: "4",
    title: "Party disko náladička",
    audioUrl: "/components/Sound/music/zkouska5.mp3",
    picture: obrazek5,
  },
  {
    id: "5",
    title: "Příroda zklidující mysl",
    audioUrl: "/components/Sound/music/zkouska6.mp3",
    picture: obrazek6,
  },
];

export const SoundPage = () => {
  return (
    <div className="container__mainSoundMenu">
      <h1 className="container__mainSoundMenu--title">Relaxační hudba</h1>
      <CarouselMenu musicData={musicData} />
    </div>
  );
};
