import "./style.css";

const steps = [
  // 0
  {
    stepText:
      "Zhluboka se nadechněte a nechte se vést smysly zpět do současného okamžiku. Projdeme si je jeden po druhém a pak sami uvidíte, jak se budete na konci cítit.",
    stepDescription:
      "Nejprve se zaměřte na zrak. Pozorně se rozhlédněte a jmenujte 5 věcí, které kolem sebe vidíte. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Hotovo. Co dál?",
  },
  // 1
  {
    stepText: "Výborně! Nyní se zaměříme na sluch.",
    stepDescription:
      "Zhluboka se nadechněte a zaposlouchejte se do zvuků kolem sebe. Jmenujte 4 věci, které slyšíte. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Pečlivě naposloucháno. Můžeme dál.",
  },
  // 2
  {
    stepText: "Skvělá práce. Teď je na řadě hmat.",
    stepDescription:
      "Navnímejte si 3 věci, které aktuálně cítíte přes svůj hmat. Může to být látka oděvu, povrch židle, na které sedíte, cokoliv, s čím přicházíte pomocí hmatu do kontaktu. Můžete si je říci nahlas nebo potichu odpočítat ve své mysli.",
    stepButton: "Odpočítáno. Jedeme dál.",
  },
  // 3
  {
    stepText: "Výborně! Nyní se zaměříme na čich.",
    stepDescription:
      "Navnímejte si 2 vůně či pachy, které můžete momentálně cítit. Může se jednat o vjemy příjemné, ale i trpké. Odříkejte si je nahlas nebo potichu odpočítejte ve své mysli.",
    stepButton: "Hotovo. Na velké finále!",
  },
  // 4
  {
    stepText: "Poslední ze smyslů se dostal na řadu - chuť v ústech.",
    stepDescription:
      "Zkuste si pojmenovat 1 chuť, kterou právě cítíte v ústech. Jmenujte ji nahlas nebo potichu ve své mysli.",
    stepButton: "Splněno!",
  },
];

export const FiveSenses = () => {
  return (
    <div className="container">
      <h1>Metoda pěti smyslů</h1>
    </div>
  );
};
