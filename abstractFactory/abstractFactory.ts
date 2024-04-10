export interface AbstractProductA {
    methodA(): string;
}

export interface AbstractProductB {
    methodB(): string;
}

export interface AbstractFactory {
    createProductA(params?: any): AbstractProductA;
    createProductB(): AbstractProductB;
}

export class ProductA1 implements AbstractProductA {
    methodA = () => {
        return `This is methodA of ProductA1`;
    };
}

export class ProductB1 implements AbstractProductB {
    methodB = () => {
        return `This is methodB of ProductB1`;
    };
}

export class ProductA2 implements AbstractProductA {
    methodA = () => {
        return `This is methodA of ProductA2`;
    };
}

export class ProductB2 implements AbstractProductB {
    methodB = () => {
        return `This is methodB of ProductB2`;
    };
}

export class ConcreteFactory1 implements AbstractFactory {
    createProductA = (): AbstractProductA => {
        return new ProductA1();
    };

    createProductB = (): AbstractProductB => {
        return new ProductB1();
    };
}

export class ConcreteFactory2 implements AbstractFactory {
    createProductA = (): AbstractProductA => {
        return new ProductA2();
    };

    createProductB = (): AbstractProductB => {
        return new ProductB2();
    };
}

export class Factory {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.abstractProductA = factory.createProductA();
        this.abstractProductB = factory.createProductB();
    }

    public call(): void {
        console.log(this.abstractProductA.methodA());
        console.log(this.abstractProductB.methodB());
    }
}
