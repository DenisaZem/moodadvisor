import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Bubble from "../Bubble";
import { useNavigate } from "react-router-dom";
import breath from "./img/1.png";
import music from "./img/2.png";
import exercie from "./img/3.png";

const questions = [
  // 0
  {
    answerOptions: [
      {
        nextQuestionIndex: 1,
      },
      {
        nextQuestionIndex: 2,
      },
      {
        nextQuestionIndex: 7,
      },
      {
        nextQuestionIndex: 10,
      },
      {
        nextQuestionIndex: 13,
      },
    ],
  },
  // 1
  {
    answerOptions: [
      {
        link: "/exercises/journal",
        nextQuestionIndex: null,
      },
    ],
  },
  // 2
  {
    answerOptions: [
      {
        nextQuestionIndex: 3,
      },
      {
        nextQuestionIndex: 4,
      },
      {
        nextQuestionIndex: 5,
      },
      {
        nextQuestionIndex: 6,
      },
    ],
  },
  // 3
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 4
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 5
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 6
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
      {
        link: "/music/5",
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 7
  {
    answerOptions: [
      {
        nextQuestionIndex: 8,
      },
      {
        nextQuestionIndex: 9,
      },
    ],
  },
  // 8
  {
    answerOptions: [
      {
        link: "/breath",
        nextQuestionIndex: null,
      },
      {
        link: "/exercises/senses",
        nextQuestionIndex: null,
      },
      {
        link: "/exercises/counting",
        nextQuestionIndex: null,
      },
    ],
  },
  // 9
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 10
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: 11,
      },
      {
        nextQuestionIndex: 12,
      },
    ],
  },
  // 11
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 12
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
    ],
  },
  // 13
  {
    answerOptions: [
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
      {
        nextQuestionIndex: null,
      },
    ],
  },
];

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

  // Tento useEffect se musí přenést do komponenty, vždy kde bude bublina
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
      <h1 className="quiz-logo">MoodAdviser</h1>
      {currentQuestion === null ? (
        <div className="lastSentence-section">
          <div className="lastSentence-section__recommended">
            {t("quiz.last")}
          </div>
          <div className="lastSentence-section__menu">
            <a className="lastSentence-section__menu--link" href="/breath">
              <img src={breath} alt="breath" />
              <p className="lastSentence-section__menu--link-text">
                {t("navigation.breath")}
              </p>
            </a>
            <a className="lastSentence-section__menu--link" href="/music">
              <img src={music} alt="music" />
              <p className="lastSentence-section__menu--link-text">
                {t("navigation.music")}
              </p>
            </a>
            <a className="lastSentence-section__menu--link" href="/exercises">
              <img src={exercie} alt="exercises" />
              <p className="lastSentence-section__menu--link-text">
                {t("navigation.exercises")}
              </p>
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="question__section">
            <h2 className="question-subtitle">
              {t(`quiz.questions.${currentQuestion}.questionSub`)}
            </h2>
            <div className="question-text">
              {t(`quiz.questions.${currentQuestion}.questionText`)}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="answer__section--button"
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
        </>
      )}
    </div>
  );
};

export default Quiz;
