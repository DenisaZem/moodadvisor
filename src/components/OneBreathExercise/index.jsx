import { BreathBubble } from "../BreathBubble";
import { useState } from "react";
import {dataBreathExercise} from "../BreathBubble/dataBreathExercise";
import { useParams } from "react-router-dom";
import "./style.css";

export const OneBreathExercise = () => {
  const [showBubble, setShowBubble] = useState(false);
  const { id } = useParams();
  // const [offBubble, setOffBubble] = useState(false);

  const handleButtonClick = () => {
      setShowBubble(!showBubble)
  };

  const exercise = dataBreathExercise[id];
  // const breathData = exercise[breathExercise];

  return (
    <div className="container__breathExercise">
      <h1 className="breathExercise__title">{exercise.title}</h1>
      {/* <h1 className="breathExercise__title">{dataBreathExrecise}</h1> */}
      <div className="breathExercise__content">
        <div className="breathExercise__bubbleSpace">
          {showBubble && <BreathBubble />}
        </div>
        <button className="breathExercise__button" onClick={handleButtonClick}>
          {showBubble ? "Ukončit" : "Začít"}
        </button>
      </div>
    </div>
  );
};
