import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = ({ onStart }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    onStart();
    navigate("/survey");
  };

  return (
    <div className="welcome-screen">
      <h1>Welcome to the Customer Survey</h1>
      <button onClick={handleStart}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
