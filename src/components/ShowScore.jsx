import { Link } from "react-router-dom";
import Summary from "./Summary";

const ShowScore = ({
  handlePlayAgainClick,
  score,
  questionsArray,
  selectedAnswers,
}) => {
  return (
    <>
      <div className="score-section">
        <h2 className="score">Your Score: {score}</h2>
        <Link to="/" className="playAgain-btn" onClick={handlePlayAgainClick}>
          Play Again
        </Link>
      </div>
      <Summary
        questionsArray={questionsArray}
        selectedAnswers={selectedAnswers}
      />
    </>
  );
};

export default ShowScore;
