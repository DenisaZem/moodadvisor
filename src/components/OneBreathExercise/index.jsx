import { BreathBubble } from "../BreathBubble";
import { useState } from "react";
import dataBreathExrecise from "../BreathBubble/dataBreathExrecise";
import { useParams } from "react-router-dom";
import "./style.css";

export const OneBreathExercise = () => {
  const [showBubble, setShowBubble] = useState(false);
  const { id } = useParams();
  // const [offBubble, setOffBubble] = useState(false);

  const handleButtonClick = () => {
    if (showBubble) {
      setShowBubble(false);
    } else {
      setShowBubble(true);
    }
  };

  return (
    <div className="container__breathExercise">
      <h1>{dataBreathExrecise[id].title}</h1>
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
