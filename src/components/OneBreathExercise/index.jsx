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

  const handleButtonClick = () => {
    setShowBubble(!showBubble);
  };

  const exercise = dataBreathExercise[id];

  return (
    <div className="container__breathExercise">
      <h1 className="breathExercise__title">{t(`breath.${id}.title`)}</h1>
      <div className="breathExercise__content--buttons">
        <a href={`/breath/${Number(id) === 0 ? 3 : Number(id) - 1}`}>
          {t("breathControl.0")}
        </a>
        <a href="/breath">{t("breathControl.1")}</a>
        <a href={`/breath/${Number(id) === 3 ? 0 : Number(id) + 1}`}>
          {t("breathControl.2")}
        </a>
      </div>

      <p className="breathExercise__description">
        {t(`breath.${id}.description`)}
      </p>
      <p className="breathExercise__info">{t(`breath.${id}.info`)}</p>
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
