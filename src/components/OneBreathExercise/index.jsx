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
      <Link className="breathExercise__back" to="/breath">
        {t("backButton")}
      </Link>
      <h1 className="breathExercise__title">{t(`breath.${id}.title`)}</h1>
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
        <button className="breathExercise__button" onClick={handleButtonClick}>
          {showBubble ? t(`breath.${id}.close`) : t(`breath.${id}.start`)}
        </button>
      </div>
    </div>
  );
};
