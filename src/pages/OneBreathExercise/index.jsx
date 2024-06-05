import { BreathBubble } from "../../components/BreathBubble";
import  { useState } from "react";
import "./style.css";

export const OneBreathExercise = () => {
  const [showBubble, setShowBubble] = useState(false);

  const handleButtonClick = () => {
    setShowBubble(true);
  };

  return (
    <div>
      <h1>Nadpis</h1>
      <button onClick={handleButtonClick}>
        Klikni a začne dýchací cvičení
      </button>
      {showBubble && <BreathBubble />}
    </div>
  );
};
