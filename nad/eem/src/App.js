import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import SurveyScreen from "./SurveyScreen";
import ThankYouScreen from "./ThankYouScreen";

function App() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
    { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
    { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
    { id: 4, text: "On a scale of 1-10, how would you recommend us to your friends and family?", type: "rating", scale: 10 },
    { id: 5, text: "What could we do to improve our service?", type: "text" }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSubmit = () => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    setIsCompleted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setIsCompleted(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen onStart={() => setCurrentQuestion(1)} />} />
        <Route
          path="/survey"
          element={
            <SurveyScreen
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              onAnswer={handleAnswer}
              answers={answers}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route path="/thank-you" element={isCompleted ? <ThankYouScreen onReset={handleReset} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
