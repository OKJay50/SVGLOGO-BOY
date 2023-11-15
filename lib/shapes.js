//This function will generate the shapes for the VPM file
class Shape {
    constructor(color) {
        this.color = color
    }
    chooseColor(colorChoice) {
        this.color = (colorChoice);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cs="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
    }

}

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`;
    }

}

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
    }

}

module.exports = {Square, Circle, Triangle};