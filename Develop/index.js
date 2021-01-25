// Acceptance criteria
    // Links in Table of Contents link to corresponding sections
    // WHEN a license is chosen, that badge added to top of README, license description added to License section
    // WHEN GitHub username entered, link to profile added to Questions
    // WHEN email address entered, email address added to Questions with contact instructions for more questions

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
        name: 'tableOfContents',
        type: 'input',
        message: 'Enter your table of contents information.',
     },
     {
         name: 'installConfirm',
         type: 'confirm',
         message: 'Would you like to add installation instructions?',
     },
     {
        name: 'installation',
        type: 'input',
        message: 'Enter your installation instructions.',
     },
     {
        name: 'usageConfirm',
        type: 'confirm',
        message: 'Would you like to add usage instructions?',
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
        name: 'contributorConfirm',
        type: 'confirm',
        message: 'Would you like to add contributors?',
    },
     {
         name: 'contributing',
         type: 'input',
         message: 'Enter the names of your contributors.',
     },
     {
        name: 'testConfirm',
        type: 'confirm',
        message: 'Would you like to add test instructions?',
    },
     {
         name: 'tests',
         type: 'input',
         message: 'Enter test instructions.',
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
