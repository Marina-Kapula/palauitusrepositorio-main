const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) return <div>No feedback given</div>;

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>All {all}</div>
      <div>Average {average}</div>
      <div>Positive {positive}%</div>
    </div>
  );
};

export default Statistics;
