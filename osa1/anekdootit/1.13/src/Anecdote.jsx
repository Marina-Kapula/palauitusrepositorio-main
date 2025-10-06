import { useState } from "react";

const Anecdote = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Object.fromEntries(anecdotes.map((_, i) => [i, 0]))
  );

  const next = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  
  const vote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
  };

  const top = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>Vote</button>
      <button onClick={next}>Next anecdote</button>
      {votes[top] > 0 && <p>Top: {anecdotes[top]} — {votes[top]} votes</p>}
    </div>
  );
};

export default Anecdote;
