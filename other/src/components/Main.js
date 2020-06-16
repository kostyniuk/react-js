import React, { useState, useEffect, useRef } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState('');
  const [text, setText] = useState('');

  let rerender = useRef(0);

  useEffect(() => {
    rerender.current = rerender.current + 1;
    setTimeout(() => {
      console.log(`got some data from an API: ${text}`)
    }, 2000)
  }, [text]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const parseText = () => {
    setText(inp)
  }

  return (
    <div>
      <h2>Main Page</h2>
      <h3>Rerender: {JSON.stringify(rerender.current, null, 2)}</h3>
      <h3>Count: {count}</h3>
      <h3>Input: {inp}</h3>
      <h3>Text: {text}</h3>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <input type='text' value={inp} onChange={e => setInp(e.target.value)} />
      <button onClick={() => parseText()}>Submit</button>
    </div>
  );
};

export default Main;
