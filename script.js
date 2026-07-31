console.log("Hello World");
console.log("Hello World");
var input = document.getElementById("new-task");
var list = document.getElementById("todoList");
var addBtnText = document.getElementById("addBtnText");
var editIndex = -1;
var tasks = [];

// ===================== Add Task Function ====================== //
function addTask() {
  var userInput = input.value.trim();
  if (userInput === "") return;

  if (editIndex === -1){
    tasks.push(userInput);
  } else {
    tasks[editIndex] = userInput;
    editIndex = -1;
    addBtnText.innerHTML = `Add`;
  }

  localStorage.setItem("todos", JSON.stringify(tasks));

  // listNumber()
  displayTask();
}

// ===================== Display Task Function ====================== //
function displayTask() {
  list.innerHTML = "";
  input.value = "";
  input.focus();

  var data = localStorage.getItem("todos");

  if (data !== null) {
    var parseData = JSON.parse(data);
    tasks = parseData;
  }

  for (let i = 0; i < tasks.length; i++) {
    var item = tasks[i];
    list.innerHTML += `
        <li class="todo">
            <span class="todo__text">${item}</span>
            <div class="todo__actions">
              <button type="button" class="icon-btn" aria-label="Edit task" onclick="editTask(${i})">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="icon-btn icon-btn--danger"
                aria-label="Delete task"
                onclick="deleteTask(${i})"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"
                  />
                </svg>
              </button>
            </div>
        </li>
    `;
  }
}

// ===================== Delete Task Function ====================== //
function deleteTask(index) {
  console.log(index);
  tasks.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(tasks));
  displayTask();
}

// ===================== Clear ALl Tasks Function ====================== //
function clearAll() {
  var removeAll = localStorage.removeItem("todos");
  tasks = [];
  displayTask();
}

// ===================== Clear ALl Tasks Function ====================== //
function resetInput() {
  input.value = "";
  input.focus();
}

// ===================== Edit Task Function ====================== //
function editTask(index) {
  editIndex = index;
  input.value = tasks[index];
  input.focus();
  addBtnText.innerHTML = `Update`;

}

displayTask();
