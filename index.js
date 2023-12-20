//Packages needed for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {Triangle, Square, Circle} = require("./lib/shapes.js")

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

// Declare function to write a logo.svg file
function createFile({textContent, textColor, shapeFillColor, shape}) {
    let svgString = "";
    if(shape === "triangle"){
        const triangle = new Triangle(textContent, textColor, shapeFillColor)
        svgString = triangle.render()
    }
    else if(shape === "square"){
        const square = new Square(textContent, textColor, shapeFillColor)
        svgString = square.render()
    }
    else {
        const circle = new Circle(textContent, textColor, shapeFillColor)
        svgString = circle.render()
    }
    fs.writeFileSync(path.join(__dirname, "/generated-logos/", textContent + shape + ".svg"),svgString)
}
