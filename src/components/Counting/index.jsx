import { useEffect, useState } from "react";
import "./style.css";

export const Counting = () => {
  const [answer, setAnswer] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const newNumbers = () => {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);
    setNumbers([number1, number2]);
  };

  useEffect(() => newNumbers(), []);

  const handleAnswer = (event) => {
    event.preventDefault();
    const total = numbers[0] + numbers[1];
    if (total === Number(answer)) {
        console.log("dobře!")
      return <div>Dobrá práce!</div>;
    } else {
        console.log("špatně!")
      return <div>Zkus to znovu</div>;
    }
  };

  return (
    <div className="container">
      <h1>Počítání</h1>
      <p>Zaměřte se na tato jednoduchá matematická cvičení.</p>
      <form action="">
        <label className="counting-label">
          {numbers[0]} + {numbers[1]} =
        </label><br></br>
        <input
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAnswer();
          }}
          type="number"
        />
      </form>
    </div>
  );
};
