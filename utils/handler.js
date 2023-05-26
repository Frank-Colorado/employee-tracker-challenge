// These are the prompts for the inquirer package
const { departmentPrompt, rolePrompt, employeePrompt } = require("./prompts");
// This is the inquirer package
const inquirer = require("inquirer");
// These are the Classes that will be used to create new data in the database
const { Department, Role, Employee } = require("../modules");
// This is a function called handleChoice
// It has one parameter: choice
const handleChoice = async (choice) => {
  // A switch statement is used to determine which function to call based on the user's choice
  switch (choice) {
    case "View All Employees":
      const employees = await Employee.getAll();
      console.table(employees);
      break;
    case "View All Departments":
      const departments = await Department.getAll();
      console.table(departments);
      break;
    case "View All Roles":
      const roles = await Role.getAll();
      console.table(roles);
      break;
    case "Add Employee":
      const employeeAnswer = await inquirer.prompt(employeePrompt);
      console.log("Add Employee");
      break;
    case "Add Department":
      const departmentAnswer = await inquirer.prompt(departmentPrompt);
      console.log("Add Department");
      break;
    case "Add Role":
      const roleAnswer = await inquirer.prompt(rolePrompt);
      console.log("Add Role");
      break;
    case "Update Employee Role":
      // call function
      console.log("Update Employee Role");
      break;
    // If the user chooses to quit, the application will exit
    case "Quit":
      console.log("Goodbye!");
      process.exit(0);
  }
};

module.exports = handleChoice;
