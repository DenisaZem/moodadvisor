import "./style.css";
import zarovka from "./img/zarovka.jpg"
import note from "./img/note.jpg"

export const AboutPage = () => {
  return (
    <div className="container">
      <div className="AboutProject">
        <div className="AboutProject__title">
          <div className="about-project__container1">
            <img
              className="about__project--zarovkaImg"
              src={zarovka}
              alt="zarovka"
            />
            <h2 className="about-project--name">MoodAdviser</h2>
          </div>
          <div className="about-project__container2">
            <p className="about__project--title">
                Projekt MoodAdviser vznikl jako závěrečný projekt pro Digitální Akademii: Web 2024 od Czechitas. Jedná se o webovou aplikaci, která uživateli pomocí zábavného klikacího kvízu poradí nebo připomene aktivity a techniky, které by mu mohly pomoci se zvládnutím jejich aktuální nálady. Důležitou součástí aplikace je také několik jednoduchých relaxačních metod a cvičení, knihovna relaxační hudby a dechová cvičení.
            </p>
            <img
              className="about__project--noteImg"
              src={note}
              alt="blocek"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
