export const add_todo = "add_todo";

export function addTodo(text) {
  let newTodo = {
    todo: text,
    complete: false
  };

  return { type: add_todo, payload: newTodo };
}