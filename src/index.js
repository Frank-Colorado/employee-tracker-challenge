const inquirer = require("inquirer");
const handler = require("../utils/handler");
const { mainPrompt } = require("../utils/prompts");

// This is an async function called init
// This will be the primary function that will be called to start the application
const init = async () => {
  // Inquirer is used to prompt the user with the mainPrompt array
  // The user's answer is stored in a variable called answer
  const answer = await inquirer.prompt(mainPrompt);
  // This is a variable called choice that contains the user's choice
  const choice = answer.choice;
  // The handler function is called and passed the user's choice
  const data = await handler(choice);
  // The data returned from the handler function is logged to the console as a table
  console.table(data);
  // Recursion is implemented to call the init function again until the user quits
  init();
};

init();
