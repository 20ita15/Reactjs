import React from "react";
import { useNavigate } from "react-router-dom";

const SurveyScreen = ({ questions, currentQuestion, setCurrentQuestion, onAnswer, answers, onSubmit }) => {
  const question = questions[currentQuestion - 1];
  const navigate = useNavigate(); // Add the useNavigate hook for routing

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleAnswer = (e) => {
    const answer = e.target.value;
    onAnswer(question.id, answer);
  };

  const handleFinalSubmit = () => {
    if (window.confirm("Are you sure you want to submit the survey?")) {
      onSubmit(); // Save the answers
      navigate("/thank-you"); // Redirect to Thank You page after submission
    }
  };

  return (
    <div className="survey-screen">
      <h2>Question {currentQuestion}/{questions.length}</h2>
      <p>{question.text}</p>

      {question.type === "rating" ? (
        <input
          type="number"
          min="1"
          max={question.scale}
          value={answers[question.id] || ""}
          onChange={handleAnswer}
        />
      ) : (
        <textarea value={answers[question.id] || ""} onChange={handleAnswer} />
      )}

      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentQuestion === 1}>Previous</button>
        <button onClick={handleSkip}>Skip</button>
        {currentQuestion < questions.length ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleFinalSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default SurveyScreen;
