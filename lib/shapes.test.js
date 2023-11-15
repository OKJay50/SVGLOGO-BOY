const {Rectangle, Ellipse, Pentagon} = require("./shapes");

describe('Rectangle Test', () => {
    test('renders correctly', () => {
        const shape = new Rectangle();
        let color = 'green';
        shape.setFillColor(color);
        expect(shape.draw()).toEqual(`<rect x="25" y="25" height="150" width="300" fill="${color}"></rect>`);
    });
});

describe('Ellipse Test', () => {
    test('renders correctly', () => {
        const shape = new Ellipse();
        let color = 'red';
        shape.setFillColor(color);
        expect(shape.draw()).toEqual(`<ellipse cx="150" cy="100" rx="150" ry="80" fill="${color}"></ellipse>`);
    });
});

describe('Pentagon Test', () => {
    test('renders correctly', () => {
        const shape = new Pentagon();
        let color = 'yellow';
        shape.setFillColor(color);
        expect(shape.draw()).toEqual(`<polygon points="50,150 150,50 250,150 225,250 75,250" fill="${color}"></polygon>`);
    });
});
