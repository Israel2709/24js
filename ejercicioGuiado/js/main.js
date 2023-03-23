import api from "./api.js";
import { createListItem } from "./createDom.js";

const printTodos = async () => {
  let todos = await api.getTodos();
  let todoWrapper = document.getElementById("todo-list");
  document
    .querySelectorAll("#todo-list li")
    .forEach((element) => element.remove());
  todos.forEach((todo) => {
    let { id, completed, title } = todo;
    todoWrapper.append(createListItem(id, title, completed));
  });
};

printTodos();
