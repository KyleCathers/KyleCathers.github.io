/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
// projects master list module object
const projectList = (() => {
  let projectListArray = [];

  // add new project
  const addProject = (project) => {
    projectListArray.push(project);
  };

  // remove specified project
  const removeProject = (title) => {
    // array = [{title: "1", ...}, {title: "2", ...}, {title: "3"}], remove "1" object
    projectListArray = projectListArray.filter(
      (project) => project.title !== title,
    );
  };

  // returns titles of each project in an array
  const info = () => {
    const projectTitlesArray = [];
    projectListArray.forEach((project) => {
      projectTitlesArray.push(project.title);
    });

    return projectTitlesArray;
  };

  // returns project object of specified title from list
  const getProject = (title) => {
    const targetProject = projectListArray.find(
      (project) => project.title === title,
    );
    return targetProject;
  };

  return {
    addProject,
    removeProject,
    info,
    getProject,
  };
})();

// project factory object
const project = (title) => {
  let tasksList = [];

  const addTask = (title, details, dueDate, priority, doneState) => {
    tasksList.push(task(title, details, dueDate, priority, doneState));
  };

  const removeTask = (title) => {
    tasksList = tasksList.filter((task) => task.title !== title);
  };

  const getTask = (title) => {
    const targetTask = tasksList.find((task) => task.title === title);
    return targetTask;
  };

  const getTaskObjects = () => tasksList;

  return {
    addTask,
    removeTask,
    getTask,
    getTaskObjects,
    title,
  };
};

// task factory object
const task = (title, details, dueDate, priority, doneState = false) => ({
    title,
    details,
    dueDate,
    priority,
    doneState,
  });

export { projectList, project };
