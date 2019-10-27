import React from 'react';
import './App.css';
import info from './info.json';
import TodoItem from './TodoItem';

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
    this.state = {
      todos: info.data
    }
      
    this.handleChange = this.handleChange.bind(this);
  }

  // handleClick() {
  //   this.setState(prev => {
  //     return {
  //       count: prev.count + 1
  //     }
  //   })
  // }
  handleChange(id) {
    this.setState(prev => {
      const updatedTodos = prev.todos.map(todo => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      })
      return { 
        todos: updatedTodos
      }
    })
  }
  render() {
    console.log(info.data)
    const namesComponents = info.data.map(el => <TodoItem id = {el.id} text = {el.text} done = {el.done} handleChange = {this.handleChange} />);
    return (
      <div className="App">
        <h1>Todos</h1>
        {namesComponents}
        <button onClick={this.handleClick}>Click me</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  
}

export default App;
