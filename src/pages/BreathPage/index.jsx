import { Link } from "react-router-dom";
import { Breath } from "../../components/Breath";
import "./style.css";

export const BreathPage = () => {
  return (
    <>
      <Breath />
      <Link to="/breath/exercise">Na dechové cvičení</Link>
    </>
  );
};
