import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

   if (all === 0) {
    return <p>No feedback given</p>; 
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Statistics; 
