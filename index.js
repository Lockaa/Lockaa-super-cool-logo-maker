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
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    `;
    if(data.shape === "circle") {
        outStr += 
        `   <circle cx="150" cy="150" r="150" stroke-width="2" fill="${data.shapeColor}" />
        <text x="50" y="155" fill='${data.textColor}' font-size="35">${data.text}</text>
        `;    
    }
    else if(data.shape === "square") {
        outStr += 
        `   <rect x="0" y="0" width="300" height="300" fill="${data.shapeColor}" stroke-width="5"/>
        <text x="50" y="155" fill='${data.textColor}' font-size="35">${data.text}</text>
        `;
    }
    else {
        outStr += 
        `   <polygon points="150, 0 300, 300 0, 300" fill="${data.shapeColor}"/>
        <text x="85" y="175" fill='${data.textColor}' font-size="35">${data.text}</text>
            `;
    }
    
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