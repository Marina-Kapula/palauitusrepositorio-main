import { useState } from "react";

const Anecdote = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

const next = () => {
  setSelected((selected + 1) % anecdotes.length);    // анегдоти по порядку
};





  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  
  const topIndex = votes.indexOf(Math.max(...votes));

  return (
    <div className="anecdote-container">
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>

      {Math.max(...votes) > 0 && (
        <div className="top-anecdote">
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[topIndex]}</p>
          <p>has {votes[topIndex]} votes</p>
        </div>
      )}
    </div>
  );
};

export default Anecdote;
