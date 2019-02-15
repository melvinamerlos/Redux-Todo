import { add_todo } from "./actions";

let defaultState = {
  title: "Todo List:",
  todos: []
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case add_todo:
      let newTodos = [...state.todos, action.payload];
      return Object.assign({}, state, { todos: newTodos });
    default:
      return state;
  }
}
