import { BreathBubble } from "../BreathBubble";
import { useState } from "react";
import { dataBreathExercise } from "../BreathBubble/dataBreathExercise";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

export const OneBreathExercise = () => {
  const { t } = useTranslation();
  const [showBubble, setShowBubble] = useState(false);
  const { id } = useParams();
  // const [offBubble, setOffBubble] = useState(false);

  const handleButtonClick = () => {
    setShowBubble(!showBubble);
  };

  const exercise = dataBreathExercise[id];
  // const breathData = exercise[breathExercise];

  return (
    <div className="container__breathExercise">
    
      <h1 className="breathExercise__title">{t(`breath.${id}.title`)}</h1>
{/* TADY ZMĚNIT TEXT "SOUNDCONTROL" NA "BREATHCONTROL" A NAPSAT ZPĚT NA VÝBĚR DECHU..NAPŘ */}
      <div className="breathExercise__content--buttons">
      <a href={`/breath/${Number(id) === 0 ? 5 : Number(id) - 1}`}>
          {t("soundControl.0")}
        </a>
        <a href="/breath">{t("soundControl.1")}</a>
        <a href={`/breath/${Number(id) === 5 ? 0 : Number(id) + 1}`}>
          {t("soundControl.2")}
        </a> 
      </div>

      <p className="breathExercise__description">
        {t(`breath.${id}.description`)} 
      </p>
      <p className="breathExercise__info">{t(`breath.${id}.info`)}</p>
      {/* <h1 className="breathExercise__title">{dataBreathExrecise}</h1> */}
      <div className="breathExercise__content">
        <div className="breathExercise__bubbleSpace">
          {showBubble ? (
            <BreathBubble />
          ) : (
            <div
              className="bubbleBreath__out"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></div>
          )}
        </div>
        <button className="breathExercise--button" onClick={handleButtonClick}>
          {showBubble ? t(`breath.${id}.close`) : t(`breath.${id}.start`)}
        </button>
      </div>
    </div>
  );
};
