// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Enter a description of your project.', 'Installation instructions (if applicable):', 'Provide instructions and examples for use.', 'List any collaborators, third-party assets, or tutorials you used to create this project.', 'What license did you use for this project?', 'List any test instructions.', 'Enter your GitHub profile link.', 'Enter your email address.'];

inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'projectName',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'collaborators',
    },
    {
      type: 'list',
      message: questions[5],
      choices: ['MIT', 'other'],
      name: 'license',
    },
    {
      type: 'input',
      message: questions[6],
      name: 'tests',
    },
    {
      type: 'input',
      message: questions[7],
      name: 'gitHubUrl',
    },
    {
      type: 'input',
      message: questions[8],
      name: 'emailAddress',
    },
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
