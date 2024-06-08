import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const steps = [
  // 0
  {
    stepText:
      "Zhluboka se nadechněte a nechte se vést smysly zpět do současného okamžiku. Projdeme si je jeden po druhém a pak sami uvidíte, jak se budete na konci cítit.",
    stepDescription:
      "Nejprve se zaměřte na zrak. Pozorně se rozhlédněte a jmenujte 5 věcí, které kolem sebe vidíte. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Hotovo. Co dál?",
    nextStepIndex: 1,
  },
  // 1
  {
    stepText: "Výborně! Nyní se zaměříme na sluch.",
    stepDescription:
      "Zhluboka se nadechněte a zaposlouchejte se do zvuků kolem sebe. Jmenujte 4 věci, které slyšíte. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Pečlivě naposloucháno. Můžeme dál.",
    nextStepIndex: 2,
  },
  // 2
  {
    stepText: "Skvělá práce. Teď je na řadě hmat.",
    stepDescription:
      "Navnímejte si 3 věci, které aktuálně cítíte přes svůj hmat. Může to být látka oděvu, povrch židle, na které sedíte, cokoliv, s čím přicházíte pomocí hmatu do kontaktu. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Odpočítáno. Jedeme dál.",
    nextStepIndex: 3,
  },
  // 3
  {
    stepText: "Výborně! Nyní se zaměříme na čich.",
    stepDescription:
      "Navnímejte si 2 vůně či pachy, které můžete momentálně cítit. Může se jednat o vjemy příjemné, ale i trpké. Odříkejte si je nahlas nebo potichu odpočítejte ve své mysli.",
    stepButton: "Hotovo. Na velké finále!",
    nextStepIndex: 4,
  },
  // 4
  {
    stepText: "Poslední ze smyslů se dostal na řadu - chuť v ústech.",
    stepDescription:
      "Zkuste si pojmenovat 1 chuť, kterou právě cítíte v ústech. Jmenujte ji nahlas nebo potichu ve své mysli.",
    stepButton: "Splněno!",
    nextStepIndex: null,
  },
];

export const FiveSenses = () => {
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
    <div className="container">
      <h1>Metoda pěti smyslů</h1>
      {lastStep ? (
        <div className="final-step">
          <h2 className="final-step--title">
            Úspěšně jste dokončili metodu pěti smyslů!
          </h2>
          <p className="final-step--description">
            Tuto metodu je dobré si zapamatovat a vracet se k ní kdykoliv podle
            potřeby. Hluboký dech a soustředení se na smyslové vjemy pomáhají
            vracet se z hlavy zpátky do těla a správně se uzemnit.
          </p>
          <p className="final-step--alternative">
            Pro další úlevu od úzkosti můžete vyzkoušet cvičení s počítáním nebo
            některou z vedených meditací dostupných na internetu.
          </p>
          <Link to="/exercises/counting">Počítání</Link>
        </div>
      ) : (
        <div className="step-section">
          <h3 className="step-text">{steps[currentStep].stepText}</h3>
          <p className="step-description">
            {steps[currentStep].stepDescription}
          </p>

          <button className="step-button" onClick={() => handleStepClick(steps[currentStep].nextStepIndex)}>
            {steps[currentStep].stepButton}
          </button>
        </div>
      )}
    </div>
  );
};
