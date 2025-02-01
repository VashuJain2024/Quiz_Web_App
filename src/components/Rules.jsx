import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
      <h1>Some Rules of this Quiz...</h1>
      <ul className="rules-list">
        <li>
          You have only <span>10 seconds</span> per each question.
        </li>
        <li>Once you select your answer, it can't be undone.</li>
        <li>You cann't select any option once time goes off.</li>
        <li>You cann't exit from the quiz while you're playing.</li>
        <li>You'll get score on the basis of your correct answers.</li>
      </ul>
      <div className="buttons">
        <Link to="/" type="button" className="butn btn-exit">
          Exit Quiz
        </Link>
        <Link to="/quiz" type="button" className="butn btn-continue">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Rules;
