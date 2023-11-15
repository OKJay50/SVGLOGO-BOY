const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes');

class Svg {
    constructor(textChoice, shapeChoice) {
        this.textChoice = textChoice;
        this.shapeChoice = shapeChoice;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeChoice}${this.textChoice}</svg>`;
    }

    setText(text, textColor) {
        this.textChoice = `<text x="150" y="125" font-size="75" text-anchor="center" fill="${textColor}">${text}</text>`;
    }

    setShape(shape) {
        this.shapeChoice = shape.render();
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Generated logo.svg");
    });
}

async function promptUser() {
    const inquirerModule = await import('inquirer');
    const inquirer = inquirerModule.default;

    inquirer.prompt([
        {
            type: 'input',
            message: 'What text would you like in your image? (Please make sure it is 3 characters or less)',
            name: 'text',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            message: 'What color would you like your text to be? (You may use a keyword or hexadecimal)',
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'What shape would you like to use?',
            name: 'shape',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be? (You may use a keyword or hexadecimal)',
            name: 'shapecolor',
        },
    ])
    .then((responses) => {
        let chosenText = responses.text;
        let chosenTextColor = responses.textcolor;
        let chosenShapeColor = responses.shapecolor;
        let chosenShape = responses.shape;
        let shapeElement;

        if (chosenShape === "Square") {
            shapeElement = new Square();
        } else if (chosenShape === "Circle") {
            shapeElement = new Circle();
        } else if (chosenShape === "Triangle") {
            shapeElement = new Triangle();
        }

        shapeElement.chooseColor(chosenShapeColor);

        let svg = new Svg('', '');

        svg.setText(chosenText, chosenTextColor);
        svg.setShape(shapeElement);

        let svgContent = svg.render();
        let svgFileName = "logo.svg";

        writeToFile(svgFileName, svgContent);
    });
}

promptUser();
