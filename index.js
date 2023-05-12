// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'What is the description of your project?',
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// ...

function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown); // Call the writeToFile function
  });
}

// Function call to initialize app
init();
