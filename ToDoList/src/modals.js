import exitModal from "./images/exitButton.png";

function createAddTaskModal() {
  const addTaskModal = document.createElement("dialog");
  addTaskModal.setAttribute("id", "add-task-modal");

  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Add Task";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-task-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "task-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");

  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "task-modal-details-input");
  detailsLabel.innerText = "Details:";

  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "task-modal-details-input");
  detailsInput.setAttribute("type", "text");

  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);

  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;

  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);

  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "task-modal-priority-input");
  priorityLabel.innerText = "Priority:";

  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";

  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");

  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);

  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);

  addTaskModal.appendChild(title);
  addTaskModal.appendChild(form);

  return addTaskModal;
}

function createAddProjectModal() {
  const addProjectModal = document.createElement("dialog");
  addProjectModal.setAttribute("id", "add-project-modal");

  const modalTitle = document.createElement("div");
  modalTitle.setAttribute("class", "modalTitle");
  modalTitle.innerText = "Add Project";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-project-form");

  const row1 = document.createElement("div");
  row1.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "project-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "project-modal-title-input");
  titleInput.required = true;

  row1.appendChild(titleLabel);
  row1.appendChild(titleInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");
  error.setAttribute("id", "project-modal-error");

  const row2 = document.createElement("div");
  row2.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "project-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Submit";

  row2.appendChild(submitButton);

  form.appendChild(row1);
  form.appendChild(error);
  form.appendChild(row2);

  addProjectModal.appendChild(modalTitle);
  addProjectModal.appendChild(form);

  // validate form inputs ~~~~~~~~~~~~~~~~~~~~~ DO LATER
  form.addEventListener("submit", (e) => {
    // also check if it already exists

    if (titleInput.value === "") {
      // error.innerText = "ERROR: Title can not be blank";
      e.preventDefault();
    }
  });

  return addProjectModal;
}

function createTaskInfoModal(task) {
  const container = document.createElement("form");
  container.setAttribute("id", "task-info-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "title-row");

  const title = document.createElement("div");
  title.setAttribute("id", "task-info-modal-title");
  title.innerText = task.title;

  const exitContainer = document.createElement("button");
  exitContainer.setAttribute("id", "exit-button-container");
  exitContainer.setAttribute("formmethod", "dialog");

  const exit = new Image();
  exit.setAttribute("id", "exit-button");
  exit.src = exitModal;

  exitContainer.appendChild(exit);

  titleRow.appendChild(title);
  titleRow.appendChild(exitContainer);

  const dueDate = document.createElement("div");
  dueDate.setAttribute("id", "task-info-modal-due-date");
  dueDate.innerText = `Due Date: ${task.dueDate}`;

  const details = document.createElement("div");
  details.setAttribute("id", "task-info-modal-details");
  details.innerText = `Details: ${task.details}`;

  const priority = document.createElement("div");
  priority.setAttribute("id", "task-info-modal-priority");
  priority.innerText = `Priority: ${task.priority}`;

  const doneState = document.createElement("div");
  doneState.setAttribute("id", "task-info-modal-done-state");
  doneState.innerText = task.doneState ? "Done" : "Not Done";

  container.appendChild(titleRow);
  container.appendChild(dueDate);
  container.appendChild(details);
  container.appendChild(priority);
  container.appendChild(doneState);

  return container;
}

function clearModals() {
  // add project modal
  const projectTitleInput = document.querySelector(
    "#project-modal-title-input",
  );
  projectTitleInput.value = "";

  // add task modal
  const addTaskTitleInput = document.querySelector("#task-modal-title-input");
  addTaskTitleInput.value = "";

  const addTaskDetailsInput = document.querySelector(
    "#task-modal-details-input",
  );
  addTaskDetailsInput.value = "";

  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10 ? "0" : ""
  }${today.getMonth() + 1}-${today.getDate()}`;

  const addTaskDueDateInput = document.querySelector(
    "#task-modal-duedate-input",
  );
  addTaskDueDateInput.value = todayString;

  const addTaskPriorityInput = document.querySelector(
    "#task-modal-priority-input",
  );
  addTaskPriorityInput.value = "Low";

  // edit task modal
  const editTaskTitleInput = document.querySelector(
    "#edit-task-modal-title-input",
  );
  editTaskTitleInput.value = "";

  const editTaskDetailsInput = document.querySelector(
    "#edit-task-modal-details-input",
  );
  editTaskDetailsInput.value = "";

  const editTaskDueDateInput = document.querySelector(
    "#edit-task-modal-duedate-input",
  );
  // YYYY-MM-DD
  editTaskDueDateInput.value = todayString;

  const editTaskPriorityInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  editTaskPriorityInput.value = "Low";

  const editTaskDoneStateInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  editTaskDoneStateInput.checked = "false";
}

function createEditTaskModal() {
  const editTaskModal = document.createElement("dialog");
  editTaskModal.setAttribute("id", "edit-task-modal");

  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Edit Task";

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "edit-task-form");

  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "edit-task-modal-title-input");
  titleLabel.innerText = "Title:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "edit-task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;

  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);

  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");

  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "edit-task-modal-details-input");
  detailsLabel.innerText = "Details:";

  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "edit-task-modal-details-input");
  detailsInput.setAttribute("type", "text");

  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);

  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "edit-task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "edit-task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;

  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);

  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "edit-task-modal-priority-input");
  priorityLabel.innerText = "Priority:";

  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "edit-task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");

  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";

  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";

  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";

  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);

  const doneStateLabel = document.createElement("label");
  doneStateLabel.setAttribute("for", "edit-task-modal-done-state-input");
  doneStateLabel.innerText = "Done?";

  const doneStateInput = document.createElement("input");
  doneStateInput.setAttribute("id", "edit-task-modal-done-state-input");
  doneStateInput.setAttribute("type", "checkbox");

  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);
  priorityRow.appendChild(doneStateLabel);
  priorityRow.appendChild(doneStateInput);

  const error = document.createElement("div");
  error.setAttribute("class", "error");

  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "edit-task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);

  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);

  editTaskModal.appendChild(title);
  editTaskModal.appendChild(form);

  return editTaskModal;
}

export {
  createAddTaskModal,
  clearModals,
  createAddProjectModal,
  createTaskInfoModal,
  createEditTaskModal,
};
