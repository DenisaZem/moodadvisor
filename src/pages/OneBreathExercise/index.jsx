import { BreathBubble } from "../../components/BreathBubble";
import React, { useState } from "react";
import "./style.css";



export const OneBreathExercise = () => {

  const [showBubble, setShowBubble] = useState(false);

  const handleButtonClick = () => {
    setShowBubble(true);
  };

  return (
    <div>
      Zkouška
      <button onClick={handleButtonClick}>
        {showBubble ?  <BreathBubble /> : "" }

        Klikni a začne dýchací cvičení
  
      </button>
      
    
    </div>
  )
}

