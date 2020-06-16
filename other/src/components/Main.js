import React, { useState, useEffect, useRef } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);

  let rerender = useRef(0);
  console.log({rerender})

  useEffect(() => {
    console.log('rerenders');
    rerender.current = rerender.current + 1;
  }, []);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Main Page</h2>
      <h3>Rerender: {JSON.stringify(rerender.current, null, 2)}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Main;
