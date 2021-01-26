// Acceptance criteria
    // WHEN a license is chosen, that badge added to top of README, license description added to License section

// Requirements
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
       name: 'title',
       type: 'input',
       message: "What is your project's title?",
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description of your project.',
     },
     {
        name: 'installation',
        type: 'input',
        message: 'Enter your installation instructions.',
     },
     {
        name: 'usage',
        type: 'input',
        message: 'Enter your usage instructions.',
     },
     {
        name: 'license',
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'], 
    },
     {
         name: 'contributing',
         type: 'input',
         message: 'Enter the names of your contributors.',
     },
     {
         name: 'tests',
         type: 'input',
         message: 'Enter test instructions.',
     },
     {
         name: 'questions',
         type: 'input',
         message: 'Enter instructions for how to contact you with questions.  You will be prompted for your GitHub username and email address after this.',
     },
     {
         name: 'github',
         type: 'input',
         message: 'Enter your github username.',
     },
     {
         name: 'email',
         type: 'input',
         message: 'Enter your email address.',
     },
     {
         name: 'year',
         type: 'input',
         message: 'Enter the current year "YYYY".',
     },
     {
         name: 'firstLast',
         type: 'input',
         message: 'Enter your first and last name.',
     },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Success"))
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
            .then((data) => {
                writeToFile("README.md", data)
            })
}

// function call to initialize program
init();
