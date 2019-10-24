import React from 'react';
import logo from './logo.svg';
import './App.css';
import info from './info.json';

function Greeting(props) {
  return (
    <h1>Hi, {props.name}</h1>
  );
}

function App() {
  const object = {name: 'Alex'};
  console.log()
  const names = info.data.map(el => <Greeting name = {el.name}/>);
  console.log(names)
  return (
    <div className="App">
      <h1>HI</h1>
      <Greeting name = {names}/>
    </div>
  );
}

export default App;
