const Question = ({ questionsArray, currentQuestion }) => {
  return (
    <>
      <div className="question-count">
        {/* {console.log(currentQuestion)} */}
        <span>{currentQuestion + 1}</span>/{questionsArray.length}
      </div>
      <div className="question-text">
        {questionsArray[currentQuestion]?.description}
      </div>
    </>
  );
};

export default Question;
