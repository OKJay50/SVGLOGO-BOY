// This class generates shapes for the VPM file
class BasicShape {
    constructor(fillColor = 'black') {
        this.fillColor = fillColor;
    }
    
    setFillColor(newColor) {
        this.fillColor = newColor;
    }

    render() {
        // This method will be overridden in the derived classes
        throw new Error("Render method should be implemented in the derived class");
    }
}

class Rectangle extends BasicShape {
    render() {
        return `<rect x="25" y="25" height="150" width="300" fill="${this.fillColor}"></rect>`;
    }
}

class Ellipse extends BasicShape {
    render() {
        return `<ellipse cx="150" cy="100" rx="150" ry="80" fill="${this.fillColor}"></ellipse>`;
    }
}

class Pentagon extends BasicShape {
    render() {
        return `<polygon points="50,150 150,50 250,150 225,250 75,250" fill="${this.fillColor}"></polygon>`;
    }
}

module.exports = {Rectangle, Ellipse, Pentagon};
