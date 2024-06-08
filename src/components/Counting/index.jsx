import { useEffect, useState } from "react";
import "./style.css";

export const Counting = () => {
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
      setStateAnswer("Výborně! Počítejte znovu!");
      newNumbers();
      setAnswer("");
    } else {
      setStateAnswer("Zkuste to znovu.");
      setAnswer("");
    }
  };

  return (
    <div className="container">
      <h1>Počítání</h1>
      <h3>Zaměřte se na tato jednoduchá matematická cvičení.</h3>
      <p>Vepište svou odpověď a stiskněte tlačítko ENTER.</p>
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
