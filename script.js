// Global variables
var input = document.getElementById("new-task");
var list = document.getElementById("todoList");
var listLabel = document.getElementById("listLabel");
var addBtnText = document.getElementById("addBtnText");
var editIndex = -1;
var count = 0;
var tasks = [];

// ===================== Add Task Function ====================== //
function addTask() {
  var userInput = input.value.trim();

  // one space or more than one space are not allowed
  if (userInput === "") return;

  // For adding new task
  if (editIndex === -1) {
    tasks.push(userInput);
  }
  // For updating the selected task
  else {
    tasks[editIndex] = userInput;
    // changed values to previous
    editIndex = -1;
    addBtnText.innerHTML = `Add`;
  }

  // Data save into localstorage
  localStorage.setItem("todos", JSON.stringify(tasks));

  displayTask();
}

// ===================== Display Task Function ====================== //
function displayTask() {
  list.innerHTML = "";
  input.value = "";
  input.focus();

  // Getting data from localstorage
  var data = localStorage.getItem("todos");
  if (data !== null) {
    tasks = JSON.parse(data);
  }

  // Shows the number of list
  count = tasks.length;
  listCount();

  // This loop is running on tasks array
  var listHtml = "";
  for (let i = 0; i < tasks.length; i++) {
    var item = tasks[i];
    listHtml += `
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
  list.innerHTML = listHtml;
}

// ===================== Delete Task Function ====================== //
function deleteTask(index) {
  console.log(index);
  tasks.splice(index, 1);
  count--;
  localStorage.setItem("todos", JSON.stringify(tasks));
  displayTask();
}

// ===================== Clear ALl Tasks Function ====================== //
function clearAll() {
  localStorage.removeItem("todos");
  tasks = [];
  count = 0;
  displayTask();
}

// ===================== Reset Input Field Function ====================== //
function resetInput() {
  input.value = "";
  input.focus();
}

// ===================== Edit Task Function ====================== //
function editTask(index) {
  editIndex = index;
  input.value = tasks[index];
  input.focus();
  // change the name of add button to update
  addBtnText.innerHTML = `Update`;
}

// ===================== List Count Function ====================== //
function listCount() {
  if (count <= 1) {
    listLabel.innerHTML = `${count} Task`;
  } else {
    listLabel.innerHTML = `${count} Tasks`;
  }
}

displayTask();
