import React, { useState, useEffect } from 'react';

const Buttons = ({ setStats }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Обновляем статистику в App.jsx
  useEffect(() => {
    if (setStats) {
      setStats({ good, neutral, bad });
    }
  }, [good, neutral, bad, setStats]);

  return (
    <div style={{ marginBottom: 16 }}>
      <button onClick={() => setGood(g => g + 1)}>Good</button>
      <button onClick={() => setNeutral(n => n + 1)}>Neutral</button>
      <button onClick={() => setBad(b => b + 1)}>Bad</button>
    </div>
  );
};

export default Buttons;
