// This is an array called options that contains the options that will be displayed to the user
const mainPrompt = [
  {
    type: "list",
    name: "choice",
    messsage: "Select an option:",
    choices: [
      "View All Employees",
      "View All Departments",
      "View All Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Role",
      "Quit",
    ],
  },
];

const departmentPrompt = [
  {
    type: "input",
    name: "name",
    message: "Enter the name of the department:",
  },
];

const rolePrompt = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the role:",
  },
  {
    type: "input",
    name: "salary",
    message: "Enter the salary of the role:",
  },
  {
    type: "input",
    name: "department",
    message: "Enter the department of the role:",
  },
];

module.exports = { mainPrompt, departmentPrompt, rolePrompt };
