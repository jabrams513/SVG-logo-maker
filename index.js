//Packages needed for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/shapes.js")

// Declare function to initialize the application and prompt user with array questions for input data. Then create a logo.svg file with that data.
const init = function () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'textContent',
            message: 'What characters do you want to include in your logo (3 or fewer suggested)?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want the text be?',
        },
        {
            type: 'input',
            name: 'shapeFillColor',
            message: 'What color do you want the shape be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want your logo be?',
            choices: ['triangle', 'square', 'circle'],
        },
    ])
        .then((data) => {
            createFile(data);
        })
}

// Call the initialization function
init();