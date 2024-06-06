import { BreathBubble } from "../BreathBubble";
import  { useState } from "react";
import "./style.css";

export const OneBreathExercise = () => {
  const [showBubble, setShowBubble] = useState(false);

  const handleButtonClick = () => {
    setShowBubble(true);
  };

  return (
    <div className="container__breathExercise">
      <h1 className="breathExercise__title">Nadpis</h1>
      <div className="zkouska">
      <button className="breathExercise__button" onClick={handleButtonClick}>
        Začít
      </button>
      </div>
      {showBubble && <BreathBubble />}
    </div>
  );
};
