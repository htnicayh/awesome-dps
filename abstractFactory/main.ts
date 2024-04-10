import { ConcreteFactory1, ConcreteFactory2, Factory } from './abstractFactory'

(() => {
    const FactoryOne = new ConcreteFactory1()
    const FactorySecond = new ConcreteFactory2();

    const FInstanceOne = new Factory(FactoryOne)
    FInstanceOne.call();

    const FInstanceSecond = new Factory(FactorySecond)
    FInstanceSecond.call();
})()