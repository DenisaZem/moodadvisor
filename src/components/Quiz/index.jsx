import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Bubble from "../Bubble";
import { useNavigate } from "react-router-dom";
import breath from "./img/1.png";
import music from "./img/2.png";
import exercie from "./img/3.png";
import questions from "./quiz-questions"


const Quiz = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(false);
    }, 6000);
  }, []);

  const handleAnswerOptionClick = (nextQuestionIndex, link) => {
    if (link) {
      navigate(link);
    } else {
      setCurrentQuestion(nextQuestionIndex);
    }
  };

  // Proti scrollování během zjevení bubliny
  useEffect(() => {
    if (showBubble) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [showBubble]);

  const handleClick = () => {
    setShowBubble(false);
  };

  return (
    <div className="container__quiz">
      {showBubble && <Bubble handleClick={handleClick} />}
      <h1 className="quiz-logo">MoodAdvisor</h1>
      {currentQuestion === null ? (
        <div className="quiz__lastSentence">
          <div className="quiz__lastSentence--recommended">
            {t("quiz.last")}
          </div>
          <div className="quiz__lastSentence-menu">
            <a className="quiz__lastSentence-menu-link" href="/breath">
              <img src={breath} alt="breath" />
              <p className="quiz__lastSentence-menu--link-text">
                {t("navigation.breath")}
              </p>
            </a>
            <a className="quiz__lastSentence-menu--link" href="/music">
              <img src={music} alt="music" />
              <p className="quiz__lastSentence-menu--link-text">
                {t("navigation.music")}
              </p>
            </a>
            <a className="quiz__lastSentence-menu--link" href="/exercises">
              <img src={exercie} alt="exercises" />
              <p className="quiz__lastSentence-menu--link-text">
                {t("navigation.exercises")}
              </p>
            </a>
          </div>
        </div>
      ) : (
        <div className="quiz__QaA-section">
          <div className="quiz__question-section">
            <h2 className="quiz__question-section-subtitle">
              {t(`quiz.questions.${currentQuestion}.questionSub`)}
            </h2>
            <div className="question-text">
              {t(`quiz.questions.${currentQuestion}.questionText`)}
            </div>
          </div>
          <div className="quiz__answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="quiz__answer-section--button"
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.nextQuestionIndex,
                      t(answerOption.link)
                    )
                  }
                >
                  {t(
                    `quiz.questions.${currentQuestion}.answerOptions.${index}.answer`
                  )}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
