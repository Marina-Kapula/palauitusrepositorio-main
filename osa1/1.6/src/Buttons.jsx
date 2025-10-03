import React from "react";

const Buttons = ({ buttonNames, setGood, setNeutral, setBad }) => {
  return (
    <div>
      <button onClick={() => setGood(prev => prev + 1)}>{buttonNames[0]}</button>
      <button onClick={() => setNeutral(prev => prev + 1)}>{buttonNames[1]}</button>
      <button onClick={() => setBad(prev => prev + 1)}>{buttonNames[2]}</button>
    </div>
  );
};

export default Buttons;
