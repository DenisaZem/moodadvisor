import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Bubble from "../Bubble";
import { useNavigate } from "react-router-dom";
import breath from "./img/1.png";
import music from "./img/3.png";

const questions = [
  // 0
  {
    answerOptions: [
      {
        answerText: "quiz.questions.0.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.0.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.0.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.0.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.0.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.0.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.0.answerOptions.d.answer",
        nextQuestionIndex: "quiz.questions.0.answerOptions.d.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.0.answerOptions.e.answer",
        nextQuestionIndex: "quiz.questions.0.answerOptions.e.nextQuestionIndex",
      },
    ],
  },
  // 1
  {
    answerOptions: [
      {
        answerText: "quiz.questions.1.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.1.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 2
  {
    answerOptions: [
      {
        answerText: "quiz.questions.2.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.2.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.2.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.2.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.2.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.2.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.2.answerOptions.d.answer",
        nextQuestionIndex: "quiz.questions.2.answerOptions.d.nextQuestionIndex",
      },
    ],
  },
  // 3
  {
    answerOptions: [
      {
        answerText: "quiz.questions.3.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.3.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 4
  {
    answerOptions: [
      {
        answerText: "quiz.questions.4.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.4.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 5
  {
    answerOptions: [
      {
        answerText: "quiz.questions.5.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.5.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 6
  {
    answerOptions: [
      {
        answerText: "quiz.questions.6.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.6.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.6.answerOptions.b.answer",
        link:"quiz.questions.6.answerOptions.b.link",
        nextQuestionIndex: "quiz.questions.6.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.6.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.6.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 7
  {
    answerOptions: [
      {
        answerText: "quiz.questions.7.answerOptions.a.answer",
        nextQuestionIndex: "",
      },
      {
        answerText: "quiz.questions.7.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.7.answerOptions.b.nextQuestionIndex",
      },
    ],
  },
  // 8
  {
    answerOptions: [
      {
        answerText: "quiz.questions.8.answerOptions.a.answer",
        link:"quiz.questions.8.answerOptions.a.link",
        nextQuestionIndex: "quiz.questions.8.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.8.answerOptions.b.answer",
        link:"quiz.questions.8.answerOptions.b.link",
        nextQuestionIndex: "quiz.questions.8.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.8.answerOptions.c.answer",
        link:"quiz.questions.8.answerOptions.c.link",
        nextQuestionIndex: "quiz.questions.8.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 9
  {
    answerOptions: [
      {
        answerText: "quiz.questions.9.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.9.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.9.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.9.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.9.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.9.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 10
  {
    answerOptions: [
      {
        answerText: "quiz.questions.10.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.10.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.10.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.10.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.10.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.10.answerOptions.c.nextQuestionIndex",
      },
    ],
  },
  // 11
  {
    answerOptions: [
      {
        answerText: "quiz.questions.11.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.11.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 12
  {
    answerOptions: [
      {
        answerText: "quiz.questions.12.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.12.answerOptions.a.nextQuestionIndex",
      },
    ],
  },
  // 13
  {
    answerOptions: [
      {
        answerText: "quiz.questions.13.answerOptions.a.answer",
        nextQuestionIndex: "quiz.questions.13.answerOptions.a.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.13.answerOptions.b.answer",
        nextQuestionIndex: "quiz.questions.13.answerOptions.b.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.13.answerOptions.c.answer",
        nextQuestionIndex: "quiz.questions.13.answerOptions.c.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.13.answerOptions.d.answer",
        nextQuestionIndex: "quiz.questions.13.answerOptions.d.nextQuestionIndex",
      },
      {
        answerText: "quiz.questions.13.answerOptions.e.answer",
        nextQuestionIndex: "quiz.questions.13.answerOptions.e.nextQuestionIndex",
      },
    ],
  },
];

const Quiz = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastSentence, setLastSentence] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }, []);

  const handleAnswerOptionClick = (nextQuestionIndex, link) => {
    if (link) {
      navigate(link);
    } else if (typeof nextQuestionIndex === "number") {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      setLastSentence(true);
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

  const handleClick =()=>{
    setShowBubble(false)
  }

  return (
    <div className="container__mainQuiz">
      {showBubble && <Bubble handleClick={handleClick} />}
      {/* <h1 className="container__mainQuiz--title">Mood Quiz</h1> */}
      <div className="container__quiz">
        {lastSentence ? (
          <div className="lastSentence-section">
            {/* <div className="lastSentence-section__title">
              Dokončil jsi dotazníček.
            </div> */}
            <div className="lastSentence-section__recommended">
              {t("quiz.last")}
            </div>
            <div className="lastSentence-section__menu">
              <div className="lastSentence-section__menu--items">
                <a href="/breath">
                  <img src={breath} alt="breath" />
                </a>
                <a href="/music">
                  <img src={music} alt="music" />
                </a>
                <a href="/exercises">
                  <img src={music} alt="exercises" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="question__section">
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
                        t(answerOption.nextQuestionIndex),
                        t(answerOption.link)
                      )
                    }
                  >
                    {t(answerOption.answerText)}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
