let todoList = [
  { item: "Buy Milk", dueDate: "4/10/24" },
  { item: "Buy Bread", dueDate: "4/10/24" },
];

displayItems();

function addTodo() {
  let inputel = document.querySelector("#input-todo");
  let dateel = document.querySelector("#date-todo");

  let todoItem = inputel.value;
  let tododate = dateel.value;

  todoList.push({ item: todoItem, dueDate: tododate });
  inputel.value = "";
  dateel.value = "";

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}
