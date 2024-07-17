//Packages

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "Enter the words for the text: ",
        name: "text"
    },
    {
        type: "input",
        message: "Enter the color for the text: ",
        name: "textColor"
    },
    {
        type: "list",
        message: "Enter the shape name: ",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Enter the shape color: ",
        name: "shapeColor"
    }
];


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('logo.svg', data , (error) => {
        if(error){
            return console.log(error);
        }else{
            console.log('Generated logo.svg.');
        }
    })
}

function putInFormat(data) {
    var outStr = 
    `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    `;
    if(data.shape === "circle") {
        outStr += 
        `   <circle cx="100" cy="100" r="80" stroke="black" stroke-width="2" fill="${data.shapeColor}" />
        `;    
    }
    else if(data.shape === "square") {
        outStr += 
        `   <rect x="0" y="0" width="100" height="100" stroke="black" fill="${data.shapeColor}" stroke-width="5"/>
        `;
    }
    else {
        outStr += 
        `   <polygon points="50, 13.397 100, 100 0, 100" fill="${data.shapeColor}"/>
        `;
    }
    
    outStr += 
    `   <text x="50" y="100" fill='${data.textColor}' font-size="35">${data.text}</text>
    `
    outStr += 
    `</svg>`;

    return outStr;
  }


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(putInFormat(data));
    })
}

// Function call to initialize app
init();