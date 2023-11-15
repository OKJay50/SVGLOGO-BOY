const {Square, Circle, Triangle} = require("./shapes");

describe('Square Test', () => {
    test('renders correctly', () => {
        const shape = new Square();
        let color = ('blue');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

describe('Circle Test', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        let color = ('blue');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<circle cs="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Triangle Test', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        let color = ('blue');
        shape.chooseColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});