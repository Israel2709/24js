const createListItem = (liNumber, liText, completed) => {
  let todoItem = document.createElement("li");
  let todoId = document.createElement("span");
  todoId.classList.add("me-3");
  todoId.innerText = liNumber;
  todoItem.classList.add(
    "list-group-item",
    completed ? "text-decoration-line-through" : null
  );
  todoItem.innerText = liText;
  todoItem.prepend(todoId);
  return todoItem;
};

export { createListItem };
