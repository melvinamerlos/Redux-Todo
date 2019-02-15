import React from "react";
import { connect } from "react-redux";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = text => {
    let newTodo = {
      todo: text,
      complete: false
    };
    this.setState(prev => {
      return { todos: [...prev.todos, newTodo] };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { title: state.title };
}

export default connect(mapStateToProps)(App);