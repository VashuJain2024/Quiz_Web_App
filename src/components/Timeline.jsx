import React, { useState, useEffect } from "react";

const Timeline = ({
  progressValue,
  setProgressValue,
  currentQuestion,
  setCurrentQuestion,
  setShowScore,
}) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);

    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        if (prev === 100) {
          if (currentQuestion === 9) {
            setShowScore(true);
          }
          setCurrentQuestion(currentQuestion + 1);
          clearInterval(interval);
          setProgressValue(0);
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentQuestion, setCurrentQuestion]);

  return (
    <div
      className="progress timeline shake"
      key={animationKey}
      role="progressbar"
      aria-label="Progress example"
      aria-valuenow={progressValue}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar progressAnim"
        style={{ width: `${progressValue}%` }}
      ></div>
    </div>
  );
};

export default Timeline;
