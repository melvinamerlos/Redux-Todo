import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "./actions";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  changeInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  createNewTodo = e => {
    e.preventDefault();
    this.setState({ inputValue: "" });
    this.props.addTodo(this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.createNewTodo}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeInputValue}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { addTodo: addTodo }
)(TodoInput);
