const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  
  const StatisticLine = ({ text, value }) => (
    <div>
      {text} {value}
    </div>
  );

  return (
    <table>
      <tbody>
        <tr><td>good {good}</td></tr>
        <tr><td>neutral {neutral}</td></tr>
        <tr><td>bad {bad}</td></tr>
        <tr><td>all {all}</td></tr>
        <tr><td>average {average}</td></tr>
        <tr><td>positive {positive}%</td></tr>
      </tbody>
    </table>
  )
}

export default Statistics;
