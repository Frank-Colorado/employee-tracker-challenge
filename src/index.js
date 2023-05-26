const inquirer = require("inquirer");
const handler = require("../utils/handler");
const { mainPrompt } = require("../utils/prompts");

// This is an async function called init
// This will be the primary function that will be called to start the application
const init = async () => {
  // This is an object called answer that contains the user's choice
  const answer = await inquirer.prompt(mainPrompt);
  // This is a variable called choice that contains the user's choice
  const choice = answer.choice;
  // The handler function is called and passed the user's choice
  handler(choice);
  // Recursion is implemented to call the init function again until the user quits
  init();
};

init();
