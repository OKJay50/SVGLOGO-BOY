const fs = require('fs');

class Svg {
    constructor(textChoice, shapeChoice) {
        this.textChoice = textChoice;
        this.shapeChoice = shapeChoice;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeChoice}${this.textChoice}</svg>`;
    }

    setText(text, textColor) {
        this.textChoice = `<text x="150" y="125" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`;
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
    try {
        const inquirerModule = await import('inquirer');
        const inquirer = inquirerModule.default;

        const responses = await inquirer.prompt([
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
                choices: ['Rectangle', 'Ellipse', 'Pentagon'],
            },
            {
                type: 'input',
                message: 'What color would you like your shape to be? (You may use a keyword or hexadecimal)',
                name: 'shapecolor',
            },
        ]);

        const { Rectangle, Ellipse, Pentagon } = await import('./lib/shapes.js');
        let shapeElement;

        switch (responses.shape) {
            case "Rectangle":
                shapeElement = new Rectangle();
                break;
            case "Ellipse":
                shapeElement = new Ellipse();
                break;
            case "Pentagon":
                shapeElement = new Pentagon();
                break;
            default:
                throw new Error('Invalid shape choice');
        }

        shapeElement.setFillColor(responses.shapecolor);

        let svg = new Svg('', '');
        svg.setText(responses.text, responses.textcolor);
        svg.setShape(shapeElement);

        let svgContent = svg.render();
        writeToFile("logo.svg", svgContent);
    } catch (error) {
        console.error('Error:', error);
    }
}

promptUser();
