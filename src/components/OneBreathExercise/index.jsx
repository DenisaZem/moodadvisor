import { BreathBubble } from "../BreathBubble";
import { useState } from "react";
import "./style.css";

export const OneBreathExercise = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [offBubble, setOffBubble] = useState(false);

  const handleButtonClick = () => {
    if (showBubble) {
      setShowBubble(false);
    } else {
      setShowBubble(true);
    }
  };

  return (
    <div className="container__breathExercise">
      <h1 className="breathExercise__title">Nadpis</h1>
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
