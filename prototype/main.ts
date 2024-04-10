interface Prototype {
    clone(): Prototype
}

class Circle implements Prototype {
    constructor(public _radius: number) {}
    
    clone = (): Circle => {
        return new Circle(this._radius)
    }
}

class Retangle implements Prototype {
    constructor(
        public _width: number,
        public _height: number
    ) {}

    clone = (): Retangle => {
        return new Retangle(this._width, this._height)
    }
}

const circleOrigin = new Circle(10)
const retangleOrigin = new Retangle(20, 30)

const circleOne = circleOrigin.clone()
const circleSecond = circleOrigin.clone()

const retangleOne = retangleOrigin.clone()
const retangleSecond = retangleOrigin.clone()

circleOne._radius = 15
circleSecond._radius = 30

retangleOne._width = 25
retangleSecond._height = 35

console.log(circleOne, circleSecond)
console.log(retangleOne, retangleSecond)