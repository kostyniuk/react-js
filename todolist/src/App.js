import React from 'react';
import './App.css';
import info from './info.json';

function Greeting(props) {
  return (
    <div>
      <hr/>
      <h1>Hi, {props.name}</h1>
    </div>
  );
}


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {count: 2};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => {
      return {
        count: prev.count + 1
      }
    })
  }

  render() {
    const namesComponents = info.data.map(el => <Greeting name = {el.name}/>);
    console.log(namesComponents)
    return (
      <div className="App">
        <h1>HI</h1>
        {namesComponents}
        <button onClick={this.handleClick}>Click me</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  
}

export default App;
