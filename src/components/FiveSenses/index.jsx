import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const steps = [
  // 0
  {
    nextStepIndex: 1,
  },
  // 1
  {
    nextStepIndex: 2,
  },
  // 2
  {
    nextStepIndex: 3,
  },
  // 3
  {
    nextStepIndex: 4,
  },
  // 4
  {
    nextStepIndex: null,
  },
];

export const FiveSenses = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [lastStep, setLastStep] = useState(false);

  const handleStepClick = (nextStepIndex) => {
    if (typeof nextStepIndex === "number") {
      setCurrentStep(nextStepIndex);
    } else {
      currentStep;
      setLastStep(true);
    }
  };

  return (
    <div className="five-senses--container">
      <h1>{t("senses.title")}</h1>
      {lastStep ? (
        <div className="final-step">
          <h2 className="final-step--title">{t("senses.final.title")}</h2>
          <p className="final-step--description">
            {t("senses.final.description")}
          </p>
          <p className="final-step--alternative">
            {t("senses.final.alternative")}
          </p>
          <Link className="final-step--button" to="/exercises/counting">
            {t("senses.final.link")}
          </Link>
        </div>
      ) : (
        <div className="step-section">
          <h3 className="step-text">{t(`senses.steps.${currentStep}.text`)}</h3>
          <p className="step-description">
            {t(`senses.steps.${currentStep}.description`)}
          </p>

          <button
            className="step-button"
            onClick={() => handleStepClick(steps[currentStep].nextStepIndex)}
          >
            {t(`senses.steps.${currentStep}.button`)}
          </button>
        </div>
      )}
    </div>
  );
};
