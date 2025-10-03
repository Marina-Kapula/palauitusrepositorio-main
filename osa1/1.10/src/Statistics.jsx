const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  // Внутренний компонент для одной строки
  const StatisticLine = ({ text, value }) => (
    <div>
      {text} {value}
    </div>
  );

  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={`${positive}%`} />
    </div>
  );
};

export default Statistics;
