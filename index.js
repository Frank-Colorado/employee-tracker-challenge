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

  switch (choice) {
    case "View All Employees":
      // call function
      console.log("View All Employees");
      break;
    case "View All Departments":
      // call function
      console.log("View All Departments");
      break;
    case "View All Roles":
      // call function
      console.log("View All Roles");
      break;
    case "Add Employee":
      // call function
      console.log("Add Employee");
      break;
    case "Add Department":
      // call function
      console.log("Add Department");
      break;
    case "Add Role":
      // call function
      console.log("Add Role");
      break;
    case "Update Employee Role":
      // call function
      console.log("Update Employee Role");
      break;
    case "Quit":
      console.log("Goodbye!");
      process.exit(0);
  }

  init();
};

init();
