import React, { useState, useEffect, useRef, createContext } from 'react';
import Child from './Child';
import {ChildContext} from './ChildContext';

const Main = () => {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState({});


  let rerender = useRef(0);

  const fetching = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    console.log({ data });
    const json = await data.json();
    setData(json);
  };

  useEffect(() => {
    rerender.current = rerender.current + 1;
  }, [text]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const parseText = () => {
    setText(inp);
    fetching();
  };

  return (
    <div>
      <h2>Main Page</h2>
      <h3>Rerender: {JSON.stringify(rerender.current, null, 2)}</h3>
      <h3>Count: {count}</h3>
      <h3>Input: {inp}</h3>
      <h3>Text: {text}</h3>
      <h3>Data: {JSON.stringify(data, null, 2)}</h3>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={() => parseText()}>Submit</button>
      <ChildContext.Provider value={{ data } }>
        <Child />
      </ChildContext.Provider>
    </div>
  );
};

export default Main;
