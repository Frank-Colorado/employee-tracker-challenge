// These are the prompts for the inquirer package
const {
  departmentPrompt,
  rolePrompt,
  employeePrompt,
  updateEmployeePrompt,
} = require("./prompts");
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
    // If the user chooses to view all employees, the getAll() method from the Employee class will be called
    case "View All Departments":
      const departments = await Department.getAll();
      return departments;
    // If the user chooses to view all departments, the getAll() method from the Department class will be called
    case "View All Roles":
      const roles = await Role.getAll();
      return roles;
    // If the user chooses to add an employee, the user will be prompted to enter the employee's first name, last name, role ID, and manager ID
    case "Add Employee":
      const employeeAnswer = await inquirer.prompt(employeePrompt);
      const { firstName, lastName, roleId, managerId } = employeeAnswer;
      const employee = new Employee(firstName, lastName, roleId, managerId);
      const [message, newEmployee] = await employee.create();
      console.log(message);
      return newEmployee;

    // If the user chooses to add a department, the user will be prompted to enter the department name
    case "Add Department":
      const departmentAnswer = await inquirer.prompt(departmentPrompt);
      const { name } = departmentAnswer;
      const department = new Department(name);
      const [newDepartment] = await department.create();
      return newDepartment;

    // If the user chooses to add a role, the user will be prompted to enter the title, salary, and department ID
    case "Add Role":
      const roleAnswer = await inquirer.prompt(rolePrompt);
      const { title, salary, departmentId } = roleAnswer;
      const role = new Role(title, salary, departmentId);
      const [newRole] = await role.create();
      return newRole;

    // If the user chooses to update an employee's role, the user will be prompted to select the employee and the new role
    case "Update Employee Role":
      const updateEmployeeAnswer = await inquirer.prompt(updateEmployeePrompt);
      const { employeeId, newRoleId } = updateEmployeeAnswer;
      const updatedEmployee = await Employee.updateRole(employeeId, newRoleId);
      return updatedEmployee;

    // If the user chooses to quit, the application will exit
    case "Quit":
      console.log("Goodbye!");
      process.exit(0);
  }
};

module.exports = handleChoice;
