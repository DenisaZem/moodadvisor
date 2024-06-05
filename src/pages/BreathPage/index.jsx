import { Link } from "react-router-dom";
import "./style.css";
import { OneBreathExercise } from "../OneBreathExercise";
import { CarouselMenu } from "../../components/CarouselMenu";

export const breathData = [
  {
    id: "0",
    title: "Stimulující nálada",
    audioUrl: "/components/Sound/music/zkouska.mp3",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
  {
    id: "1",
    title: "Meditační symfonie",
    audioUrl: "/components/Sound/music/zkouska2.mp3",
    picture: "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
  {
    id: "2",
    title: "Tóny lesa",
    audioUrl: "/components/Sound/music/zkouska3.mp3",
    picture:  "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
  {
    id: "3",
    title: "Harmonická melodie",
    audioUrl: "/components/Sound/music/zkouska4.mp3",
    picture:  "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
  {
    id: "4",
    title: "Party disko náladička",
    audioUrl: "/components/Sound/music/zkouska5.mp3",
    picture:  "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
  {
    id: "5",
    title: "Příroda zklidující mysl",
    audioUrl: "/components/Sound/music/zkouska6.mp3",
    picture:  "https://www.viarasalve.cz/img/image/dychani1.jpg"
  },
];

export const BreathPage = () => {
  return (
    <>
      <CarouselMenu breathData ={breathData} />
      </>

  );
};

{/* <Link to="/breath/exercise">Na dechové cvičení</Link> */}