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
    message: "Enter the department ID of the role:",
  },
];

const employeePrompt = [
  {
    type: "input",
    name: "firstName",
    message: "Enter the first name of the employee:",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter the last name of the employee:",
  },
  {
    type: "input",
    name: "role",
    message: "Enter the role ID of the employee:",
  },
  {
    type: "input",
    name: "manager",
    message: "Enter the manager ID of the employee:",
  },
];

const updateEmployeePrompt = [
  {
    type: "input",
    name: "employee",
    message: "Enter the employee to update:",
  },
  {
    type: "input",
    name: "role",
    message: "Enter the new role ID of the employee:",
  },
];

module.exports = {
  mainPrompt,
  departmentPrompt,
  rolePrompt,
  employeePrompt,
  updateEmployeePrompt,
};
