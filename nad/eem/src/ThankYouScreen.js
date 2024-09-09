import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouScreen = ({ onReset }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, onReset]);

  return (
    <div className="thank-you-screen">
      <h1>Thank you for your time!</h1>
      <p>You will be redirected to the welcome screen in 5 seconds...</p>
    </div>
  );
};

export default ThankYouScreen;
