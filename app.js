var input = document.getElementById("new-task");
var list = document.getElementById("list");
var tasks = [];


function addTask() {
    var text = input.value.trim();
    if (text === "") return;

    tasks.push(text);
    localStorage.setItem("Todos", JSON.stringify(tasks));
    displayTask();
}



function displayTask() {
    list.innerHTML = "";

    input.value = "";
    input.focus();


    var data = localStorage.getItem("Todos");
    if (data !== null) {
        var parseData = JSON.parse(data);
        tasks = parseData;
    }

    for (var i = 0; i < tasks.length; i++) {
        var item = tasks[i];

        list.innerHTML += `
        <li class="todo">
            <span class="todo__text">${item}</span>
            <div class="todo__actions">
              <button
                type="button"
                class="icon-btn"
                aria-label="Edit task"
                onclick="editTask(${i})"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="icon-btn icon-btn--danger"
                aria-label="Devare task"
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
        `


    }
}


function editTask(e) {
      var userEdit = prompt("Edit your task", tasks[e]);
        tasks.splice(e, 1, userEdit);
        localStorage.setItem("Todos", JSON.stringify(tasks))
        displayTask();

}

function deleteTask(e) {
    tasks.splice(e, 1);
    localStorage.setItem("Todos", JSON.stringify(tasks));
    displayTask();
}

function reset() {
    input.value = "";
    displayTask();
}

function clearAllList() {
    // tasks.slice(0, 2)
    tasks = ""
    localStorage.removeItem("Todos", JSON.stringify(tasks));
    console.log(tasks);
    displayTask();
}

