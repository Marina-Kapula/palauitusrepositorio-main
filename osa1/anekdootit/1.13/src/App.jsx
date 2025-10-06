import React, { useState } from "react";
import Buttons from "./Buttons.jsx";
import Statistics from "./Statistics.jsx";
import Anecdote from "./Anecdote";
import "./App.css";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonNames = ["Good", "Neutral", "Bad"];

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place.',
    'Programming without an extremely heavy use of console.log is like a doctor refusing tests.',
    'The only way to go fast, is to go well.'
  ];

  return (
    <div className="app">
      <h1>Give Feedback</h1>
      <Buttons 
        buttonNames={buttonNames} 
        setGood={setGood} 
        setNeutral={setNeutral} 
        setBad={setBad} 
      />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <h1>Software Anecdotes</h1>
      <Anecdote anecdotes={anecdotes} />
    </div>
  );
};

export default App;
