import "./style.css";
import deni from "./img/deni.png"
import sarka from "./img/sarka.png"

export const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="about-us">
        <div className="about-us--title">
          <img
            className="about-us--title--img"
            src={deni}
            alt="deni avatar"
          />
          <div className="about-us--title--text">
            <h2 className="about-us--title--name">Denisa</h2>
            <h3 className="about-us--title--name__deni">This one wants a job.</h3>
            <p className="about-us--title--paragraph">
              Denisa enjoys spending time outdoors. It helps her relax. She also
              likes programming, and she hopes to turn it into her job. She
              finds coding interesting because it lets her create things. Her
              dream is to use her programming skills to do something meaningful,
              maybe even combining them with her love for nature.
            </p>
          </div>
        </div>

        <div className="about-us--title about-us--title--sarka">
          <div className="about-us--title--text">
            <h2 className="about-us--title--name">Šárka</h2>
            <h3 className="about-us--title--name__sarka">And this one too!</h3>
            <p className="about-us--title--paragraph">
              Šárka is an eager Junior Front-End Developer enjoying every step
              of her journey of learning about the code, mainly JavaScript and
              Python, and about all the fun ways to use it. She has years of
              experience in Localization Quality Assurance in Wargaming, which
              means a trained eye for detail and goals set to perfection.
            </p>
          </div>
          <img
            className="about-us--title--img"
            src={sarka}
            alt="sarka avatar"
          />
        </div>
      </div>
    </div>
  );
};
