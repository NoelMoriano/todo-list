const formElement = document.querySelector("#tasks-form");

const toDoListElement = document.querySelector("#to-do-list");
const doingListElement = document.querySelector("#doing-list");
const doneListElement = document.querySelector("#done-list");

const statusData = {
  pending: toDoListElement,
  "in-progress": doingListElement,
  complete: doneListElement,
};

const renderTasks = (tasks, status) => {
  const statusElement = statusData[status];

  statusElement.innerHTML = "";

  tasks.map(
    (task) =>
      (statusElement.innerHTML += `<li class="card">
  <div class="content">
    <p>${task.task}</p>
    <small>${task.status}</small>
  </div>
  <div class="actions">
    <div class="icon-item">
      <i class="fa fa-pencil"></i>
    </div>
    <div class="icon-item">
      <i class="fa fa-trash"></i>
    </div>
  </div>
</li>`)
  );
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElement);

  const formDataObject = Object.fromEntries(formData.entries());

  const { status } = formDataObject;

  const oldTasks = JSON.parse(localStorage.getItem(`${status}-tasks`)) || [];

  const tasks = [...oldTasks, formDataObject];

  localStorage.setItem(`${status}-tasks`, JSON.stringify(tasks));

  renderTasks(tasks, status);
});
