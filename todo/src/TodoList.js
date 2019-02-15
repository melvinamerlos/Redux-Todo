import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}>{todo.todo}</li>;
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(Todolist);