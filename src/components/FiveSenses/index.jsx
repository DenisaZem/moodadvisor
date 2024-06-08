import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const steps = [
  // 0
  {
    stepText: "senses.steps.0.text",
    stepDescription: "senses.steps.0.description",
    stepButton: "senses.steps.0.button",
    nextStepIndex: "senses.steps.0.stepIndex",
  },
  // 1
  {
    stepText: "senses.steps.1.text",
    stepDescription: "senses.steps.1.description",
    stepButton: "senses.steps.1.button",
    nextStepIndex: "senses.steps.1.stepIndex",
  },
  // 2
  {
    stepText: "senses.steps.2.text",
    stepDescription: "senses.steps.2.description",
    stepButton: "senses.steps.2.button",
    nextStepIndex: "senses.steps.2.stepIndex",
  },
  // 3
  {
    stepText: "senses.steps.3.text",
    stepDescription: "senses.steps.3.description",
    stepButton: "senses.steps.3.button",
    nextStepIndex: "senses.steps.3.stepIndex",
  },
  // 4
  {
    stepText: "senses.steps.4.text",
    stepDescription: "senses.steps.4.description",
    stepButton: "senses.steps.4.button",
    nextStepIndex: "senses.steps.4.stepIndex",
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
          <h3 className="step-text">{t(steps[currentStep].stepText)}</h3>
          <p className="step-description">
            {t(steps[currentStep].stepDescription)}
          </p>

          <button
            className="step-button"
            onClick={() => handleStepClick(t(steps[currentStep].nextStepIndex))}
          >
            {t(steps[currentStep].stepButton)}
          </button>
        </div>
      )}
    </div>
  );
};
