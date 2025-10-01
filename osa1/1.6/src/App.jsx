import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons.jsx';

const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <div className="app">
      <h1>Give Feedback</h1>

      <Buttons setStats={setStats} />

      <h2>Statistics</h2>
      <p>Good: {stats.good}</p>  <p>Neutral: {stats.neutral}</p>  <p>Bad: {stats.bad}</p>
    </div>
  );
};

export default App;
