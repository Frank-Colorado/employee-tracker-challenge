const inquirer = require("inquirer");
const handler = require("../utils/handler");

// This is an array called options that contains the options that will be displayed to the user
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

// This is an async function called init
// This will be the primary function that will be called to start the application
const init = async () => {
  // This is an object called answer that contains the user's choice
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Select an option:",
      choices: options,
    },
  ]);
  // This is a variable called choice that contains the user's choice
  const choice = answer.choice;
  // The handler function is called and passed the user's choice
  handler(choice);
  // Recursion is implemented to call the init function again until the user quits
  init();
};

init();
