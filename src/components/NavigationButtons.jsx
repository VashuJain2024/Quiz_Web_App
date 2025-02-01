const NavigationButtons = ({
  questionsArray,
  currentQuestion,
  setCurrentQuestion,
  setProgressValue,
}) => {
  return (
    <>
      <div className="navigation-buttons">
        {/* {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setProgressValue(0);
            }}
          >
            Previous
          </button>
        )} */}
        {currentQuestion < questionsArray.length - 1 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
              setProgressValue(0);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default NavigationButtons;
