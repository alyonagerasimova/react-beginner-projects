import React, { useState } from "react";
import "./App.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "Что такое Props?",
    variants: [
      "Компонент",
      "Входящие свойства в компонент",
      "Свойство HTML тега",
    ],
    correct: 1,
  },
  {
    title: "Что такое state?",
    variants: [
      "Обычный объект - источник данных. Содержит информацию по поведению и состоянию интерфейса.",
      "HTML тег",
      "то, что я не знаю что такое",
    ],
    correct: 0,
  },
];

function Game({ step, question, onClickVariant }) {
  let percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner" />
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => {
          return (
            <li key={variant} onClick={() => onClickVariant(index)}>
              {variant}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="congratulation"/>
      <h2>
        Поздравляем, вы ответили правильно на {correct} из {questions.length}!
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }

  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
