const inquirer = require("inquirer");

const options = [
  "View All Employees",
  "View All Departments",
  "View All Roles",
  "Add Employee",
  "Add Department",
  "Add Role",
  "Update Employee Role",
  "Quit",
];

const init = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Select an option:",
      choices: options,
    },
  ]);
  const choice = answer.choice;

  init();
};

init();
