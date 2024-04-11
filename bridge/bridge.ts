interface Color {
    applyColor(): void;
}

class RedColor implements Color {
    applyColor = (): void => {
        console.log('Applying color red.');
    };
}

class BlueColor implements Color {
    applyColor = (): void => {
        console.log('Applying color blue.');
    };
}

abstract class Shape {
    constructor(protected color: Color) {}

    abstract applyShape(): void;
}

class CircleShape extends Shape {
    constructor(_color: Color) {
        super(_color);
    }

    applyShape = (): void => {
        console.log('Apply circle.');
        this.color.applyColor();
    };
}

class SquareShape extends Shape {
    constructor(_color: Color) {
        super(_color);
    }

    applyShape = (): void => {
        console.log('Apply square.');
        this.color.applyColor();
    };
}

const redCircle = new CircleShape(new RedColor());
const blueCircle = new CircleShape(new BlueColor());
const redSquare = new SquareShape(new RedColor());
const blueSquare = new SquareShape(new BlueColor());

redCircle.applyShape();
blueSquare.applyShape();
