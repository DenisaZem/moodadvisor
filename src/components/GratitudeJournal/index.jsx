import { useState } from "react";
import "./style.css";

export const GratitudeJournal = () => {
  const [entry, setEntry] = useState("");
  const [logs, setLogs] = useState([
    { date: new Date(), text: "Je krásný den." },
    { date: new Date(), text: "Jsem Bob." },
  ]);

  const handleEntry = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(entry);
    if (entry !== "") {
      setLogs([...logs, { date: new Date(), text: entry }]);
      setEntry("");
    }
  };

  return (
    <div className="container-journal">
      <h1 className="journal-title">Deník vděčnosti</h1>
      <h3 className="journal-subtitle">
        Zapište si 5 věcí, za které jste dnes vděční.
      </h3>
      <p className="journal-text">
        Začněte pěkně hezky jednu po druhé. Pro začátek stačí i jedna jediná
        věc, která vás napadne.
      </p>
      <form className="journal-form" onSubmit={handleSubmit}>
        <label className="journal-form--label">Dnes cítím vděčnost za:</label>{" "}
        <br />
        <textarea
          onChange={handleEntry}
          value={entry}
          type="text"
          className="journal-form--textarea"
          autoFocus
        />
        <button>Zapsat</button>
        {logs.map((item, index) => {
          return (
            <div key={index}>
              {item.date.getTime()}: {item.text}
            </div>
          );
        })}
      </form>
    </div>
  );
};
