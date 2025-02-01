const Summary = ({ questionsArray, selectedAnswers }) => {
  //   console.log(questionsArray);
  //   console.log(selectedAnswers);

  return (
    <div className="summary">
      <h1>Summary</h1>
      {questionsArray.map((question, index = 0) => (
        <div key={index} className="summary-section">
          <p className="question">
            Question {index + 1}: {question.description}
          </p>
          <p className="correct-ans">
            Correct Answer:{" "}
            {
              question.options.find((option) => option.is_correct === true)
                .description
            }
          </p>
          <p className="selected-ans">
            Selected Answer: {selectedAnswers[index++] || "Not Answered"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
