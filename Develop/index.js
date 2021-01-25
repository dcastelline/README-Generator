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
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'],
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
