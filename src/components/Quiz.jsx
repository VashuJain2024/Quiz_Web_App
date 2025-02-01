import React, { useState, useEffect } from "react";
import AnswerSection from "./AnswerSection";
import "./QuizStyle.css";
import Loader from "./Loader";
import ShowScore from "./ShowScore";
import NavigationButtons from "./NavigationButtons";
import Question from "./Question";
import Timeline from "./Timeline";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [progressValue, setProgressValue] = useState(0);
  const apiUrl =
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://api.jsonserve.com/Uw5CrX");

  // Fetch questions from API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(JSON.parse(data.contents)); // Extract nested JSON
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  const questionsArray = questions.questions;

  // Handle the clicked answers option
  const handleAnswerOptionClick = (isCorrect, answer) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedSelectedAnswers);

    if (currentQuestion === 9) {
      setProgressValue(100);
      setShowScore(true);
    }
    const nextQuestion = currentQuestion + 1;
    // console.log(currentQuestion);
    // console.log(nextQuestion);
    if (nextQuestion < questionsArray.length) {
      setCurrentQuestion(nextQuestion);
      setProgressValue(0);
    }
  };

  // Handle play again button functionality
  const handlePlayAgainClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswers([]);
    setProgressValue(0);
  };

  return (
    <div className="quiz">
      <h1>{questions.title} Quiz</h1>
      {questionsArray?.length > 0 &&
        currentQuestion < questionsArray?.length && (
          <Timeline
            progressValue={progressValue}
            setProgressValue={setProgressValue}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setShowScore={setShowScore}
          />
        )}
      {showScore ? (
        <ShowScore
          handlePlayAgainClick={handlePlayAgainClick}
          score={score}
          questionsArray={questionsArray}
          selectedAnswers={selectedAnswers}
        />
      ) : (
        <>
          {questionsArray?.length > 0 ? (
            <div className="question-section">
              <Question
                questionsArray={questionsArray}
                currentQuestion={currentQuestion}
              />
              <AnswerSection
                questionsArray={questionsArray}
                currentQuestion={currentQuestion}
                handleAnswerOptionClick={handleAnswerOptionClick}
                setProgressValue={setProgressValue}
              />
              <NavigationButtons
                questionsArray={questionsArray}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                setProgressValue={setProgressValue}
                handlePlayAgainClick={handlePlayAgainClick}
                score={score}
              />
            </div>
          ) : (
            <Loader />
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
