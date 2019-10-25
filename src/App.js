import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos : [
      {id:1, content: 'buy milk'},
      {id:2, content: 'play games'},
    ]
  }
  deleteTodo = (id)=>{
    const todos = this.state.todos.filter((todo)=>{
      return todo.id !== id;
    });
    this.setState({ todos })
  }
  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }
  render(){
    return(
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo}todos={this.state.todos}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
