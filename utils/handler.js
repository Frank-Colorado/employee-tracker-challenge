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
      return employees;
      break;
    case "View All Departments":
      const departments = await Department.getAll();
      return departments;
      break;
    case "View All Roles":
      const roles = await Role.getAll();
      return roles;
      break;
    case "Add Employee":
      const employeeAnswer = await inquirer.prompt(employeePrompt);
      const { firstName, lastName, role, manager } = employeeAnswer;
      const employee = new Employee(firstName, lastName, role, manager);
      const [message, newEmployee] = await employee.create();
      console.log(message);
      return newEmployee;
      break;
    case "Add Department":
      const departmentAnswer = await inquirer.prompt(departmentPrompt);
      const { name } = departmentAnswer;
      const department = new Department(name);
      const [newDepartment] = await department.create();
      return newDepartment;
      break;
    case "Add Role":
      const roleAnswer = await inquirer.prompt(rolePrompt);
      const { title, salary, department } = roleAnswer;
      const role = new Role(title, salary, department);
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
