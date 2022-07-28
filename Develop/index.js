// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{type: 'input',
                    name: 'title',
                    message: 'What is your project title?',
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Provide a description of your project?',
                },
                {
                    type: 'input',
                    name: 'installation',
                    message: 'Provide the install instructions for your project?',
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Provide the usage information for your project?',
                },
                {
                    type: 'input',
                    name: 'contribution',
                    message: 'Provide the contribution details for your project?',
                },
                {
                    type: 'input',
                    name: 'tests',
                    message: 'Provide the test instructions for your project?',
                },
                {
                    type: 'list',
                    name: 'license',
                    choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised License'
                               ,'Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0'
                               ,'GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense','None'],
                },
                {
                    type: 'input',
                    name: 'username',
                    message: 'Enter your github username',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your email',
                }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('generated_readme.md',readmeContent);
        })
}

// Function call to initialize app
init();
