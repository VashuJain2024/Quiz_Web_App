const AnswerSection = ({
  questionsArray,
  currentQuestion,
  handleAnswerOptionClick,
}) => {
  if (!Array.isArray(questionsArray?.[currentQuestion]?.options)) {
    return null; // or a loading spinner
  }

  return (
    <div className="answer-section">
      {questionsArray[currentQuestion].options.map(
        (option) =>
          option.description && (
            <button
              className="answer-options"
              key={option.id}
              onClick={() => {
                handleAnswerOptionClick(option.is_correct, option.description);
              }}
            >
              {option.description}
            </button>
          )
      )}
    </div>
  );
};

export default AnswerSection;
