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
        type: "input",
        message: "Enter the shape name: ",
        name: "shape"
    },
    {
        type: "input",
        message: "Enter the shape color: ",
        name: "shapeColor"
    }
];


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('../output/SVG.txt', data , (error) => {
        if(error){
            return console.log(error);
        }else{
            console.log('File made successfully.');
        }
    })
}

function putInFormat(data) {
    return `
    text: ${data.text}

    text color: ${data.textColor}

    shape: ${data.shape}
    
    shape color: ${data.shapeColor}
  
  `;
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