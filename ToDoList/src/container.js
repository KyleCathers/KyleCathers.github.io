/* eslint-disable no-use-before-define */
import { addDays, isAfter } from "date-fns";
import headerIcon from "./images/checklist.png";
import addIcon from "./images/addIcon.png";
import deleteIcon from "./images/deleteIcon.png";
import editIcon from "./images/editIcon.png";

import {
  createAddTaskModal,
  clearModals,
  createAddProjectModal,
  createTaskInfoModal,
  createEditTaskModal,
} from "./modals";

import { projectList, project } from "./factories";

let selectedProject = "Home";

const currentTaskInfoModal = document.createElement("dialog");
currentTaskInfoModal.setAttribute("id", "current-task-info-modal");

const editTaskModal = createEditTaskModal();

let currentTaskObject = {};

function pageInit() {
  // initialize page layout
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const headerLogo = document.createElement("a");
  headerLogo.setAttribute("href", "https://www.theodinproject.com/");
  headerLogo.setAttribute("target", "_blank");
  headerLogo.setAttribute("id", "header-logo");

  const headerLogoImg = new Image();
  headerLogoImg.setAttribute("id", "header-logo-img");
  headerLogoImg.src = headerIcon;

  headerLogo.appendChild(headerLogoImg);

  const headerText = document.createElement("a");
  headerText.setAttribute("id", "header-text");
  headerText.setAttribute("href", "https://www.theodinproject.com/");
  headerText.setAttribute("target", "_blank");
  headerText.innerText = "To Do List";

  header.appendChild(headerLogo);
  header.appendChild(headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  const menuTopSection = document.createElement("div");
  menuTopSection.setAttribute("id", "menu-top-section");

  const HomeTask = document.createElement("div");
  HomeTask.setAttribute("id", "Home-task");
  HomeTask.setAttribute("class", "click");
  HomeTask.innerText = "Home";
  HomeTask.addEventListener("click", () => {
    selectedProject = "Home";
    updateMenu();
    updateContent();
  });

  const dueTodayTasks = document.createElement("div");
  dueTodayTasks.setAttribute("id", "due-today");
  dueTodayTasks.setAttribute("class", "click");
  dueTodayTasks.innerText = "Due Today";
  dueTodayTasks.addEventListener("click", () => {
    selectedProject = "Due Today";
    updateMenu();
    updateContent();
  });

  const dueThisWeekTasks = document.createElement("div");
  dueThisWeekTasks.setAttribute("id", "due-this-week");
  dueThisWeekTasks.setAttribute("class", "click");
  dueThisWeekTasks.innerText = "Due This Week";
  dueThisWeekTasks.addEventListener("click", () => {
    selectedProject = "Due This Week";
    updateMenu();
    updateContent();
  });

  const customProject = document.createElement("div");
  customProject.setAttribute("id", "custom-project");

  const taskSection = document.createElement("div");
  taskSection.setAttribute("id", "task-section");

  taskSection.appendChild(HomeTask);
  taskSection.appendChild(dueTodayTasks);
  taskSection.appendChild(dueThisWeekTasks);
  taskSection.appendChild(customProject);

  const addSection = document.createElement("div");
  addSection.setAttribute("id", "add-section");

  // add project button
  const addProjectDiv = document.createElement("div");
  addProjectDiv.setAttribute("id", "add-project");

  const addProjectButton = new Image();
  addProjectButton.setAttribute("id", "add-project-button");
  addProjectButton.setAttribute("class", "click");
  addProjectButton.src = addIcon;

  const addProjectText = document.createElement("div");
  addProjectText.setAttribute("id", "add-project-text");
  addProjectText.innerText = "Add Project";

  addProjectDiv.appendChild(addProjectButton);
  addProjectDiv.appendChild(addProjectText);

  // add task button
  const addTaskDiv = document.createElement("div");
  addTaskDiv.setAttribute("id", "add-task");

  const addTaskButton = new Image();
  addTaskButton.setAttribute("id", "add-task-button");
  addTaskButton.setAttribute("class", "click");
  addTaskButton.src = addIcon;

  const addTaskText = document.createElement("div");
  addTaskText.setAttribute("id", "add-task-text");
  addTaskText.innerText = "Add Task";

  addTaskDiv.appendChild(addTaskButton);
  addTaskDiv.appendChild(addTaskText);

  addSection.appendChild(addProjectDiv);
  addSection.appendChild(addTaskDiv);

  menuTopSection.appendChild(taskSection);

  menu.appendChild(menuTopSection);
  menu.appendChild(addSection);

  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");

  main.appendChild(menu);
  main.appendChild(mainContent);

  container.appendChild(header);
  container.appendChild(main);

  const addTaskModal = createAddTaskModal();
  const addProjectModal = createAddProjectModal();

  container.appendChild(currentTaskInfoModal);
  container.appendChild(addTaskModal);
  container.appendChild(addProjectModal);
  container.appendChild(editTaskModal);

  // add listeners to buttons
  addTaskButton.addEventListener("click", () => {
    addTaskModal.showModal();
    clearModals();

    const addTaskSubmitButton = document.querySelector("#task-modal-submit");
    addTaskSubmitButton.addEventListener("click", addTask);
  });

  addProjectButton.addEventListener("click", () => {
    addProjectModal.showModal();
    clearModals();

    const addProjectSubmitButton = document.querySelector(
      "#project-modal-submit",
    );
    addProjectSubmitButton.addEventListener("click", addProject);
  });

  // add Home project
  const HomeProject = project("Home");
  projectList.addProject(HomeProject);

  return container;
}

// display all tasks of selected project
function updateContent() {
  const mainContentTitle = document.createElement("div");
  mainContentTitle.setAttribute("id", "main-content-title");
  mainContentTitle.innerText = selectedProject;

  // clear any leftover DOM content
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = "";
  mainContent.appendChild(mainContentTitle);

  // if targetProject is home project, iterate through all projects on the list and append
  if (
    selectedProject === "Home" ||
    selectedProject === "Due Today" ||
    selectedProject === "Due This Week"
  ) {
    // iterate through all projects
    projectList.info().forEach((title) => {
      const targetProject = projectList.getProject(title);
      // add target project tasks to the DOM
      appendTasks(targetProject);
    });
  } else {
    // go into currently selected project of project list array
    const targetProject = projectList.getProject(selectedProject);

    // add target projects task to the DOM
    appendTasks(targetProject);
  }
}

// update menu with custom project
function updateMenu() {
  const customTasks = document.querySelector("#custom-project");
  customTasks.innerHTML = "";

  projectList.info().forEach((title) => {
    if (title === "Home") return; // skip adding Home project since it's a default

    const projectItem = document.createElement("div");
    projectItem.setAttribute("class", "custom-project-item");

    const projectText = document.createElement("div");
    projectText.setAttribute("id", title);
    projectText.setAttribute("class", "click");
    projectText.innerText = title;
    projectText.addEventListener("click", () => {
      selectedProject = title;
      updateContent();
    });

    const projectDelete = new Image();
    projectDelete.src = deleteIcon;
    projectDelete.setAttribute("id", `delete${title}`);
    projectDelete.setAttribute("class", "delete click");
    projectDelete.addEventListener("click", () => {
      projectList.removeProject(title);
      // TODO: if current project is the one deleted, display Home project in main content
      saveToLocal();
      updateMenu();
    });

    projectItem.appendChild(projectText);
    projectItem.appendChild(projectDelete);

    customTasks.appendChild(projectItem);
  });
}

// add a new task to selectedProject
// should update local storage
function addTask() {
  // get info from modal
  const titleInput = document.querySelector("#task-modal-title-input");
  const detailsInput = document.querySelector("#task-modal-details-input");
  const dueDateInput = document.querySelector("#task-modal-duedate-input");
  const priorityInput = document.querySelector("#task-modal-priority-input");

  if(titleInput.value === "") {
    return;
  } if(dueDateInput.value === "") {
    return;
  }

  // go into currently selected project of project list array
  let targetProject = projectList.getProject(selectedProject);

  if (selectedProject === "Due Today" || selectedProject === "Due This Week") {
    targetProject = projectList.getProject("Home");
  }

  // add modal details as task to selected project
  targetProject.addTask(
    titleInput.value,
    detailsInput.value,
    dueDateInput.value,
    priorityInput.value,
  );

  // save changes to local storage
  saveToLocal();

  updateContent();

  // new listener added every time submit button is clicked, remove here
  const addTaskSubmitButton = document.querySelector("#task-modal-submit");
  addTaskSubmitButton.removeEventListener("click", addTask);
}

// add a new project to the master project list
// should update local storage
function addProject() {
  const titleInput = document.querySelector("#project-modal-title-input");
  if (titleInput.value === "") {
    return;
  }
  const newProject = project(titleInput.value);

  projectList.addProject(newProject);

  // new listener added every time modal submit button is clicked, remove here
  const addProjectSubmitButton = document.querySelector(
    "#project-modal-submit",
  );
  addProjectSubmitButton.removeEventListener("click", addProject);

  // save changes to local storage
  saveToLocal();

  // refresh menu DOM since new project is added
  updateMenu();
}

// iterate all tasks of target project and add to DOM
function appendTasks(targetProject) {
  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${
    today.getMonth() + 1 < 10 ? "0" : ""
  }${today.getMonth() + 1}-${today.getDate()}`;

  const mainContent = document.querySelector("#main-content");

  targetProject.getTaskObjects().forEach((task) => {
    if (selectedProject === "Due Today") {
      if (task.dueDate !== todayString) {
        return;
      }
    } else if (selectedProject === "Due This Week") {
      const taskYear = task.dueDate.substr(0, 4);
      let taskMonth = task.dueDate.substr(5, 2);
      const taskDay = task.dueDate.substr(8, 2);
      taskMonth = taskMonth[0] === "0" ? taskMonth[1] : taskMonth;
      const taskDate = new Date(taskYear, taskMonth - 1, taskDay);
      const nextWeekDate = addDays(new Date(), 6); // 1 week from today

      // skip if task.dueDate > nextWeekString e.g. now until sep 18
      if (isAfter(taskDate, nextWeekDate)) {
        return;
      }
    }

    const currentTask = document.createElement("div");
    currentTask.setAttribute("id", task.title);
    currentTask.setAttribute("class", `task ${task.priority}`);

    // (title, details, dueDate, priority, doneState)
    const taskTitle = document.createElement("div");
    taskTitle.setAttribute("class", "task-title");
    taskTitle.setAttribute("id", `${task.title}-title`);
    taskTitle.innerText = `${task.title}`;
    taskTitle.addEventListener("click", () => {
      currentTaskInfoModal.innerHTML = "";
      currentTaskInfoModal.appendChild(createTaskInfoModal(task));
      currentTaskInfoModal.showModal();
    });

    const taskRight = document.createElement("div");
    taskRight.setAttribute("class", "task-right");

    const taskDetails = document.createElement("div");
    taskDetails.setAttribute("id", `${task.title}-details`);
    taskDetails.innerText = "Details";
    // when clicked pull up module with title, details, due date, done sate, priority

    const taskDueDate = document.createElement("div");
    taskDueDate.setAttribute("class", "task-due-date");
    taskDueDate.innerText = `Due: ${task.dueDate}`;

    const taskDoneState = document.createElement("div");
    taskDoneState.setAttribute("class", "task-done-state");
    taskDoneState.setAttribute("id", `${task.title}-done-state`);
    taskDoneState.innerText = task.doneState ? "Done" : "Not Done";
    taskDoneState.addEventListener("click", () => {
      // eslint-disable-next-line no-param-reassign
      task.doneState = !task.doneState;
      // save changes to local storage
      saveToLocal();
      updateContent();
    });

    const editContainer = document.createElement("div");
    editContainer.setAttribute("class", "button-container");

    const editButton = new Image();
    editButton.src = editIcon;
    editButton.setAttribute("id", `${task.title}-edit`);
    editButton.setAttribute("class", "edit click");
    // when clicked pull up module to edit title, details, due date, done sate, priority
    editButton.addEventListener("click", () => {
      editTaskModal.showModal();
      clearModals();

      currentTaskObject = task;

      const editTaskSubmitButton = document.querySelector(
        "#edit-task-modal-submit",
      );
      editTaskSubmitButton.addEventListener("click", editTask);
    });

    editContainer.append(editButton);

    const deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "button-container");

    const deleteButton = new Image();
    deleteButton.src = deleteIcon;
    deleteButton.setAttribute("id", `${task.title}-delete`);
    deleteButton.setAttribute("class", "delete click");
    // when clicked pull up module with title, details, due date, done state, priority
    deleteButton.addEventListener("click", () => {
      targetProject.removeTask(task.title);
      saveToLocal();
      updateContent();
    });

    deleteContainer.append(deleteButton);

    taskRight.append(taskDueDate);
    taskRight.append(taskDoneState);
    taskRight.append(editContainer);
    taskRight.append(deleteContainer);

    currentTask.append(taskTitle);
    currentTask.append(taskRight);

    mainContent.appendChild(currentTask);
  });
}

function editTask() {
  // get info from modal
  const titleInput = document.querySelector("#edit-task-modal-title-input");
  const detailsInput = document.querySelector("#edit-task-modal-details-input");
  const dueDateInput = document.querySelector("#edit-task-modal-duedate-input");
  const priorityInput = document.querySelector(
    "#edit-task-modal-priority-input",
  );
  const doneInput = document.querySelector("#edit-task-modal-done-state-input");

  if(titleInput.value === "") {
    return;
  }
  
  if(dueDateInput.value === "") {
    return;
  }

  // add modal details as task to selected project
  currentTaskObject.title = titleInput.value;
  currentTaskObject.details = detailsInput.value;
  currentTaskObject.dueDate = dueDateInput.value;
  currentTaskObject.priority = priorityInput.value;
  currentTaskObject.doneState = doneInput.checked;

  // save changes to local storage
  saveToLocal();

  updateContent();
}

function saveToLocal() {
  const data = [];

  const projectTitlesArray = projectList.info();

  projectTitlesArray.forEach(title => {
    const currentProject = projectList.getProject(title);

    const projectTasksArray = [];

    const projectTasks = currentProject.getTaskObjects();

    projectTasks.forEach(task => {
      const taskString = JSON.stringify(task);
      projectTasksArray.push(taskString);
    });

    const prodObj = {"projectTitle":title,"data":projectTasksArray};

    data.push(prodObj);
  });

  const dataString = JSON.stringify(data);

  localStorage.setItem('projectList', dataString);
}

function loadFromLocal() {
  const data = localStorage.getItem('projectList');

  if (data === null) {
    return;
  }

  const dataString = JSON.parse(data);

  dataString.forEach(projectItem => {
    let currentProject = projectList.getProject('Home');  // default home

    // add current project to project list array
    if(projectItem.projectTitle !== 'Home') {
      currentProject = project(projectItem.projectTitle);

      projectList.addProject(currentProject);
    }

    // add tasks to current project
    projectItem.data.forEach(task => {
      const taskObject = JSON.parse(task);  // convert string to obj

      // create task out of retrieved task object
      currentProject.addTask(taskObject.title, taskObject.details, taskObject.dueDate, 
        taskObject.priority, taskObject.doneState);
    });
  });
}

export { pageInit, updateContent, updateMenu, loadFromLocal };
