document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("[data-form]");
  const lists = document.querySelector("[data-lists]");
  const input = document.querySelector("[data-input]");

  let todoArr = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.ceil(Math.random() * 10000000);
    const todo = new Todo(id, input.value);
    todoArr = [...todoArr, todo];
    UI.displayData();
  });

  class Todo {
    constructor(id, todo) {
      this.id = id;
      this.todo = todo;
    }
  }

  class UI {
    static displayData() {
      let displayData = todoArr.map((item) => {
        return `
          <div class="todo">
            <p>${item.todo}</p>
            <span>🗑️</span>
          </div>
        `
      });
      lists.innerHTML = displayData.join(" ");
      console.log(displayData);
    }
  }
});