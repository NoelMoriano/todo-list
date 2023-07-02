const toDoListElement_ = document.querySelector("#to-do-list");
const doingListElement_ = document.querySelector("#doing-list");
const doneListElement_ = document.querySelector("#done-list");

const statusData_ = {
  pending: toDoListElement_,
  "in-progress": doingListElement_,
  complete: doneListElement_,
};

const editTask = () => {
  alert("EDIT");
};

const removeTask = () => {
  alert("REMOVE");
};

const renderTasks_ = (tasks, status) => {
  const statusElement = statusData_[status];

  tasks.map(
    (task) =>
      (statusElement.innerHTML += `<li class="card">
    <div class="content">
      <p>${task.task}</p>
      <small>${task.status}</small>
    </div>
    <div class="actions">
      <div class="icon-item">
        <i class="fa fa-pencil" onclick="return editTask()"></i>
      </div>
      <div class="icon-item">
        <i class="fa fa-trash" onclick="return removeTask()"></i>
      </div>
    </div>
  </li>`)
  );
};

window.addEventListener("load", (event) => {
  const pendingTask = JSON.parse(localStorage.getItem("pending-tasks"));
  const inProgressTask = JSON.parse(localStorage.getItem("in-progress-tasks"));
  const completeTask = JSON.parse(localStorage.getItem("complete-tasks"));

  renderTasks_(pendingTask, "pending");
  renderTasks_(inProgressTask, "in-progress");
  renderTasks_(completeTask, "complete");
});
