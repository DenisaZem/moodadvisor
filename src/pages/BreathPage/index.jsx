import { Link } from "react-router-dom";
import "./style.css";
import { OneBreathExercise } from "../OneBreathExercise";

export const BreathPage = () => {
  return (
    <>
 
      <OneBreathExercise />
      <Link to="/breath/exercise">Na dechové cvičení</Link>
      </>

  );
};
