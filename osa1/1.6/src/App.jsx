import React, { useState } from "react"; 
import "./App.css";
import Buttons from "./Buttons.jsx";
import Statistics from "./Statistics.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonNames = ["Good", "Neutral", "Bad"];

  return (
    <div className="app">
      <h1>Give Feedback</h1>
      <Buttons 
        buttonNames={buttonNames} 
        setGood={setGood} 
        setNeutral={setNeutral} 
        setBad={setBad} 
      />
    </div>
  

  );
  };

export default App;
