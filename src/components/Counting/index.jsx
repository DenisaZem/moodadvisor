import { useEffect, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

export const Counting = () => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [stateAnswer, setStateAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const newNumbers = () => {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);
    setNumbers([number1, number2]);
  };

  useEffect(() => newNumbers(), []);

  const handleAnswer = () => {
    const total = numbers[0] + numbers[1];
    if (total === Number(answer)) {
      setStateAnswer(t("counting.success"));
      newNumbers();
      setAnswer("");
    } else {
      setStateAnswer(t("counting.error"));
      setAnswer("");
    }
  };

  return (
    <div className="container">
      <h1>{t("counting.title")}</h1>
      <h3>{t("counting.subtitle")}</h3>
      <p>{t("counting.description")}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="counting-label">
          {numbers[0]} + {numbers[1]} =
        </label>
        <br></br>
        <p>{stateAnswer}</p>
        <input
          className="counting-input"
          value={answer}
          autoFocus
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAnswer(e);
          }}
          type="number"
        />
      </form>
    </div>
  );
};
