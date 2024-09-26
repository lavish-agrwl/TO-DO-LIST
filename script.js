const submit = document.querySelector("#submit");
const taskName = document.querySelector("#taskName");
const description = document.querySelector("#description");
const todo = document.querySelector("#toDo");
const completed = document.querySelector("#completed");
taskName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});
let createTask = () => {
  if (taskName.value === "") {
    alert("Task name cannot be empty.");
  } else {
    let card = document.createElement("div");
    card.innerHTML = `<input type="checkbox">
<h3>${taskName.value}</h3>
<span>&times</span>
<p>${description.value}</p>`;
    card.classList.add("card");
    todo.appendChild(card);
    taskName.value = "";
    description.value = "";
  }
  addCheckBoxFunctionality();
  removeCard();
  saveData();
};
const addCheckBoxFunctionality = () => {
  let checkbox = document.querySelectorAll("input[type='checkbox']");
  checkbox.forEach((item) => {
    item.addEventListener("change", () => {
      if (item.checked) {
        completed.appendChild(item.parentElement);
        item.parentElement.classList.add("completed");
        saveData();
      } else {
        todo.appendChild(item.parentElement);
        item.classList.remove("completed");
        saveData();
      }
    });
  });
};
const removeCard = () => {
  document.querySelectorAll("span").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
      saveData();
    });
  });
}

const saveData = () => {
  localStorage.setItem("todo", todo.innerHTML);
  localStorage.setItem("completed", completed.innerHTML);
};
const loadData = () => {
  todo.innerHTML = localStorage.getItem("todo");
  completed.innerHTML = localStorage.getItem("completed");
  addCheckBoxFunctionality();
  removeCard();
};
loadData();
