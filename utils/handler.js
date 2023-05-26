// A function that handles the user's choices
const handleChoice = async (choice) => {
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

module.exports = handleChoice;
